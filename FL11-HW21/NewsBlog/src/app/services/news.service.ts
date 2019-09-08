import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  newsData: any[];
  sources: string[];

  constructor() {
    this.newsData = [
      {
        id: '1',
        title: 'News Title',
        content: 'Some content',
        shortContent: 'Brief content',
        date: '08/23/2019',
        source: 'NYT'
      },
      {
        id: '2',
        title: 'News Title2',
        content: 'Some content',
        shortContent: 'Brief 1 content',
        date: '08/23/2019',
        source: 'WP'
      },
      {
        id: '3',
        title: 'News Title3',
        content: 'Some 2 content',
        shortContent: 'Brief content',
        date: '08/23/2019',
        source: 'TSN'
      },
      {
        id: '4',
        title: 'News Title4',
        content: 'Some content',
        shortContent: 'Brief 1 content',
        date: '08/23/2019',
        source: 'NYT'
      },
      {
        id: '5',
        title: 'News Title5',
        content: 'Some content',
        shortContent: 'Brief content',
        date: '08/23/2019',
        source: 'WP'
      },
      {
        id: '6',
        title: 'News Title6',
        content: 'Some content',
        shortContent: 'Brief content',
        date: '08/23/2019',
        source: 'DW'
      },
    ];

    this.sources = ['NYT', 'WP', 'TSN', 'DW'];
  }

  getSources() {
    return this.sources;
  }

  getItems(source: string = '', keyword: string = ''): any[] {
    return this.newsData.filter(
      item => (item.shortContent.includes(keyword) || item.title.includes(keyword))
        && (item.source === source || source === '')
    );
  }

  addNewsItem(title: string, content: string, date: string, source: string, shortContent: string) {
    this.newsData.push({id: this.newsData.length + 1, title, content, date, source, shortContent});
    console.log('News Item has been saved', {title, content, date, source});
  }

  getNewsItemById(id: string) {
    return this.newsData.find(item => item.id === id);
  }
}


