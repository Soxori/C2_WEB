import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent} from './products/products.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path : 'categories', component: CategoriesComponent},
  {path : 'products', component: ProductsComponent},
  {path : 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
