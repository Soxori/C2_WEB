import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoriesService} from '../services/categories.service';
import {HttpClient} from '@angular/common/http';
import {CategoriesDescription} from '../models/CategoriesDescription.model';
import {Products} from '../models/Products.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public categories: CategoriesDescription;
  public products: Products[];

  constructor(private httpClient: HttpClient, private category: CategoriesService, private route: ActivatedRoute, private router: Router) {
  }

  getLink(id) {
    this.router.navigate(['/products'], {queryParams: {id}});
  }
  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.category.getCategoryById(params.id)
          .subscribe((category: CategoriesDescription) => {
            this.categories = category;
            this.products = category.products;
          });
      });

  }
}