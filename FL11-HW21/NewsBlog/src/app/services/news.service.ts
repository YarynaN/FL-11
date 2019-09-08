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
        title: 'Yahoo announces Tumblr will be shutting down late 2019 due to lack of advertisers.',
        content: 'Yahoo has recently announced the termination of the famous blogging site, Tumblr, due to lack of funding. The former founder David Karp announced that STAN LOONA ',
        shortContent: 'Yahoo has recently announced the termination of the famous blogging site, Tumblr, due to lack of funding. ',
        date: '08/23/2019',
        source: 'NYT'
      },
      {
        id: '2',
        title: 'In-N-Out Coming To Chicago 2020',
        content: 'The Califonia favorite restaurant is making its way over to the Midwest. Chicago will be the first location outside CA, TX, AZ & NV..',
        shortContent: 'The Califonia favorite restaurant is making its way over to the Midwest.',
        date: '08/23/2019',
        source: 'WP'
      },
      {
        id: '3',
        title: 'Minnesota expected to get 16 inches of snowfall within the next week!',
        content: 'Meteorologists across the metro are trying to find out how this potential snowfall is even possible right now. Minnesota residents are extremely upset about this but so the what, deal with it.',
        shortContent: 'Meteorologists across the metro are trying to find out how this potential snowfall is even possible right now.',
        date: '08/23/2019',
        source: 'TSN'
      },
      {
        id: '4',
        title: 'Famous Wing spot is closing all locations in 2019.',
        content: 'Buffalo Wild Wings has filed for bankruptcy and has chosen to close all locations by the end of 2019. CEO Sally J. Smith released her statement today. “I never expected this day to',
        shortContent: 'Buffalo Wild Wings has filed for bankruptcy and has chosen to close all locations by the end of 2019.',
        date: '08/23/2019',
        source: 'NYT'
      },
      {
        id: '5',
        title: 'Motorcyclist Stops Traffic To Save Cute Kitten From Busy Road',
        content: 'There’s a clever play on words about this adorable ginger kitten losing one of its nine lives that could be written here. But this story is more about a hero motorcyclist who saved the cute kitty from the middle of a busy road in Mons, Belgium, last month.',
        shortContent: 'The man spots the kitten, quickly stops his bike and runs to its rescue in a video that’s going viral this week. ',
        date: '08/23/2019',
        source: 'WP'
      },
      {
        id: '6',
        title: 'Roller Coaster Hero Makes One Hell Of A Catch',
        content: 'New Zealand fistball player Samuel Kempf was caught on camera plucking a flying cellphone from the air as he hit speeds of 80 mph on the Shambhala roller coaster at PortAventura Park near Barcelona, Spain.',
        shortContent: 'After the ride was over, Kempf returned the iPhone X to its rightful owner.',
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


