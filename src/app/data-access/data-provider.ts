import { Injectable, Inject } from '@angular/core';
import { NgZone } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import PouchDB from 'pouchdb';

import initialize from './initialize.js';

@Injectable()
export class DataProvider {
  zone: NgZone;
  db: any;
  initialized: any;

  constructor(zone: NgZone) {
    this.zone = zone;
    this.db = new PouchDB('angular-2-components');
    this.initialized = this.db.info().then(info => this.zone.run(() => {
      if (info.doc_count === 0) {
        return initialize(this.db);
      } else {
        console.log(`Znaleziono istniejącą bazę danych z ${info.doc_count} dokumentami.`);
      }
    })).catch(error => this.zone.run(() => {
      console.error('Nie udało się zaktualizować bazy. Sprawdź zgodność przeglądarki z opisem z książki.');
      throw error;
    }));
  }

  getDatabase() {
    return this.initialized.then(() => this.db);
  }

  getChanges(config: any) {
    return Observable.create((observer) => {
      const changes = this.db.changes(config)
        .on('change', (change) => this.zone.run(() => observer.next(change)))
        .on('error', (error) => this.zone.run(() => observer.error(error)))
        .on('complete', () => this.zone.run(() => observer.complete()));

      return function () {
        changes.cancel();
      };
    });
  }

  getLiveChanges(sinceNow = false) {
    return this.getChanges({ since: sinceNow ? 'now' : 0, live: true, include_docs: true });
  }

  getAllChanges() {
    return this.getChanges({ since: 0, include_docs: true });
  }

  getDocuments(key: any) {
    return this.initialized.then(() => {
      if (key instanceof Array) {
        const [startKey, endKey] = key;

        return this.db.allDocs({
          include_docs: true,
          attachments: true,
          startkey: startKey,
          endkey: endKey
        }).then(result => this.zone.run(() => result.rows.map(row => row.doc)));

      } else {
        return this.db.get(key).then(result => this.zone.run(() => result));
      }
    });
  }

  createOrUpdateDocument(document) {
    return this.initialized.then(() => {
      if (document._id) {
        return this.db.put(document)
          .then((response) => this.zone.run(() => response))
          .catch(error => this.zone.run(() => { throw error; }));
      } else {
        return this.db.post(document)
          .then((response) => this.zone.run(() => response))
          .catch(error => this.zone.run(() => { throw error; }));
      }
    });
  }
}
