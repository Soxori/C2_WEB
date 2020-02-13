import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Bitcoin7Component } from './bitcoin7/bitcoin7.component';
import { TopHeadlinesComponent } from './top-headlines/top-headlines.component';
import { AppleComponent } from './apple/apple.component';

@NgModule({
  declarations: [
    AppComponent,
    Bitcoin7Component,
    TopHeadlinesComponent,
    AppleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
