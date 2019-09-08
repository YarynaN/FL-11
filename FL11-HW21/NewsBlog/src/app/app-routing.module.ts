import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CreateNewsComponent } from './components/create-news/create-news.component';
import { NewsLineComponent } from './components/news-line/news-line.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component:  LandingPageComponent},
  { path: 'create-news', component: CreateNewsComponent },
  { path: 'news-line/:id', component: NewsLineComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
