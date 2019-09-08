import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { CreateNewsComponent } from './create-news/create-news.component';
import { NewsLineComponent } from './news-line/news-line.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component:  LandingPageComponent},
  { path: 'create-news', component: CreateNewsComponent },
  { path: 'news-line', component: NewsLineComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
