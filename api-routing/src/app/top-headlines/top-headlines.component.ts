import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-top-headlines',
  templateUrl: './top-headlines.component.html',
  styleUrls: ['./top-headlines.component.scss']
})
export class TopHeadlinesComponent implements OnInit {


  ngOnInit() {
  }

  private articles = [];
  private url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d2e1ffa40c3c444c8380f8e8e582c2aa";

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
