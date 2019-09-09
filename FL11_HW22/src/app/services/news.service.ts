import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  newsData: AngularFireList<any>;
  sources: string[];
  db: AngularFireDatabase;


  constructor(db: AngularFireDatabase) {
    this.db = db;
    this.newsData = db.list('/newsData');
    this.sources = ['NYT', 'WP', 'TSN', 'DW'];
  }

  getSources() {
    return this.sources;
  }

  getItems(source: string = '', keyword: string = ''): Observable<any[]> {
    return this.newsData
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes
            .map(item => ({id: item.payload.key, ...item.payload.val()}))
            .filter(item => (item.shortContent.includes(keyword) || item.title.includes(keyword))
              && (item.source === source || source === '')
            )
        )
      );
  }

  addNewsItem(title: string, content: string, date: string, source: string, shortContent: string) {
    this.newsData.push({title, content, date, source, shortContent});
    console.log('News Item has been saved', {title, content, date, source});
  }

  getNewsItemById(id: string) {
    // return this.newsData.find(item => item.id === id);

    let obj = this.db.object('/newsData/' + id).snapshotChanges().pipe(
      map(o => ({id: o.payload.key, ...o.payload.val()}))
    );
    console.log(obj);
    return obj;
  }
}


