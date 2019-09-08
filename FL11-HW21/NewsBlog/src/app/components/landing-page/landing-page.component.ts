import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {NewsService} from '../../services/news.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  sourceFilterForm: FormGroup;
  newsItems: any[];
  selectedNews: string;

  constructor(private newsService: NewsService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.sourceFilterForm = this.formBuilder.group({
      source: [''],
      keyword: ['']
    });
    this.newsItems = this.newsService.getItems();
  }

  filterNews(value: any) {
    this.newsItems = this.newsService.getItems(value.source, value.keyword);
    this.selectedNews = value.source;
  }
}
