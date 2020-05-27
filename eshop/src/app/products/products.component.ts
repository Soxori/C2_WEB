import { Component, OnInit } from '@angular/core';
import {Products} from '../models/Products.model';
import {HttpClient} from '@angular/common/http';
import {CategoriesService} from '../services/Categories.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public product: Products;

  constructor(private httpClient: HttpClient, private category: CategoriesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.category.getProductById(params.id)
          .subscribe((products: Products) => {
            this.product = products;
          });
      });
  }

}


