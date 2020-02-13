import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bitcoin7',
  templateUrl: './bitcoin7.component.html',
  styleUrls: ['./bitcoin7.component.scss']
})
export class Bitcoin7Component implements OnInit {



  ngOnInit() {
  }


  private articles = [];
  private url = "https://newsapi.org/v2/everything?q=bitcoin&from=2020-01-13&sortBy=publishedAt&apiKey=d2e1ffa40c3c444c8380f8e8e582c2aa";

  constructor(private httpClient: HttpClient) {
    this.httpClient
    .get(this.url)
    .subscribe(
      (data) => {
        this.articles = data['articles'];
      }, (error) => {

      }
    );
  }
}
