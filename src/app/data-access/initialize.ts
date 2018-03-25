import { defaultData } from './initial-data';
import { Observable } from 'rxjs/Observable';

export default function initialize(db: any) {

  console.log('Inicjalizacja bazy danych Angular 2. Komponenty');
  return Observable.create(defaultData)
    .then(mod => {
      return Promise.all(mod.default.map(document => db.put(document)));
    })
    .then((_) => db.info())
    .then(info => {
      console.log(`Udana inicjalizacja bazy danych z ${info.doc_count} dokumentami`);
    })
    .catch(error => {
      console.error('Błąd przy wstawianiu danych. Sprawdź błąd i powiadom o nim autora, jeśli się powtarza.');
      throw error;
    });
}
