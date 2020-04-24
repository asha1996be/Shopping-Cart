import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../Shared/components/shared.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [ProductsComponent, ProductlistComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    MatDialogModule
  ]
})
export class ProductsModule { }
