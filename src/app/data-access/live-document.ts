import { ReplaySubject } from 'rxjs/ReplaySubject';

function filterDocumentByQueryFactory(query) {
  return (document) => Object.keys(query).every((property) => document[property] === query[property]);
}

export class LiveDocument {
  dataProvider: any;
  data: any;
  change: any;
  subscription: any;

  constructor(dataProvider: any, query: any) {
    this.dataProvider = dataProvider;
    this.data = {};
    this.change = new ReplaySubject(1);
    this.subscription = dataProvider.getLiveChanges()
      .map((change) => change.doc)
      .filter(filterDocumentByQueryFactory(query))
      .subscribe((data) => {
        this.data = data;
        this.change.next(data);
      });
  }

  unsubscribe() {
    this.subscription.unsubscribe();
  }

  persist() {
    if (this.data) {
      this.dataProvider.createOrUpdateDocument(this.data);
    }
  }
}
