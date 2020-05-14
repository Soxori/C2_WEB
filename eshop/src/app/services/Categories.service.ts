import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import Key from '../Key';
import {Categories} from '../models/Categories.model';
import {CategoriesDescription} from '../models/CategoriesDescription.model';
import {Products} from '../models/Products.model';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {


  constructor(private httpClient: HttpClient) {

   }

   getCategories() {
     const headers = new HttpHeaders().set('access-token', Key.access_token);
     return this.httpClient.get<Categories[]>('api/categories/', {headers});
   }

   getCategoryById(id: number) {
    const headers = new HttpHeaders().set('access-token', Key.access_token);
    return this.httpClient.get<CategoriesDescription>('api/categories/' + id, {headers});
  }

  getProductById(id: number) {
    const headers = new HttpHeaders().set('access-token', Key.access_token);
    return this.httpClient.get<Products>('api/products/' + id, {headers});
  }
}