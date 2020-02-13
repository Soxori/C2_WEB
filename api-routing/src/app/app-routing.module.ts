import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppleComponent } from './apple/apple.component';
import { Bitcoin7Component } from './bitcoin7/bitcoin7.component';
import { TopHeadlinesComponent } from './top-headlines/top-headlines.component';



const routes: Routes = [
  {path: 'apple', component: AppleComponent},
  {path: 'bitcoin7', component: Bitcoin7Component},
  {path: 'top-headlines', component: TopHeadlinesComponent},
  {path: '', redirectTo: 'apple', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
