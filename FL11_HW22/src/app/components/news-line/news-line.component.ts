import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {NewsService} from '../../services/news.service';

@Component({
  selector: 'app-news-line',
  templateUrl: './news-line.component.html',
  styleUrls: ['./news-line.component.scss']
})
export class NewsLineComponent implements OnInit {
  newsItem: any;

  constructor(private newsService: NewsService, private route: ActivatedRoute) {
    this.newsItem = {};
  }

  ngOnInit() {
    this.newsService.getNewsItemById(this.route.snapshot.paramMap.get('id')).subscribe(obj => {
      this.newsItem = obj;
    });
  }

}
