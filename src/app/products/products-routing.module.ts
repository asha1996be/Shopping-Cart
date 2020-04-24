import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { ProductlistComponent } from './productlist/productlist.component';

const routes: Routes = [{
  path: '',
  component: ProductsComponent,
  children: [
    {
      path: '',
      component: ProductlistComponent,
    },
    {
      path: 'product-list',
      component: ProductlistComponent,
    }
  ],
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule { }
