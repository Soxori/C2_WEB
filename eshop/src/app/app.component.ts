
import { Component } from '@angular/core';
import { Categories } from './models/Categories.model';
import {HttpClient} from '@angular/common/http';
import {CategoriesService} from './services/Categories.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eshop';

  public arr: Categories[];

  constructor(private httpClient: HttpClient, private category: CategoriesService, private router: Router) {
    this.category.getCategories()
      .subscribe(
        (data: Categories[]) => {
          this.arr = data;
        }, (error) =>  {
          console.log(error);
        }
      );
  }

  getLink(id) {
    this.router.navigate(['/categories'], {queryParams: {id}});
  }
}