import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

import {NewsService} from '../../services/news.service';


@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.scss']
})
export class CreateNewsComponent implements OnInit {
  newsForm: FormGroup;

  constructor(private newsService: NewsService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.newsForm = this.formBuilder.group({
      heading: [''],
      shortDescription: [''],
      content: [''],
      date: [''],
      name: [''],
      source: [''],
    });
  }

  addNewsItem(value: any) {
    this.newsService.addNewsItem(value.heading, value.content, value.date, value.source, value.shortDescription);
    this.router.navigate(['/']);
  }
}
