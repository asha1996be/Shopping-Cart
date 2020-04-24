import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductlistService } from '../../services/product-list.service';
import * as cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'app-product-quantity-card',
  templateUrl: './product-quantity-card.component.html',
  styleUrls: ['./product-quantity-card.component.scss']
})
export class ProductQuantityCardComponent implements OnInit {
  @Input( ) product;
  shoppingCart = [];
  shoppingCartObj = {};
  @Output() total = new EventEmitter<number>();
  @Output() quantity = new EventEmitter<number>();
  shoppingCartTemp: any=[];
  @Output() filteredProduct = new EventEmitter();

  constructor(private productlistService:ProductlistService ) { }

  ngOnInit(): void {
    this.product['quantity'] = 0;
  }

  addCart(product){
    this.shoppingCartTemp = cloneDeep(this.productlistService.getShoppingCart());
    if(this.shoppingCartTemp.some(x => x.productId === product.productId)){
      for (var i in this.shoppingCartTemp) {
        if (this.shoppingCartTemp[i].productId = product.productId) {
          product["total"]+= product.discountedPrice;
          product["quantity"]+= 1;
          break; 
        }
      }
    } else{
      product["total"]=product.discountedPrice;
      product["quantity"]=1;
    }
    this.productlistService.addToShoppingCart(product);
    this.shoppingCartTemp = cloneDeep(this.productlistService.getShoppingCart());
    this.filteredProduct.emit(this.shoppingCartTemp);
    const totalQty = this.getShoppingCartTotalQty();
    this.total.emit(totalQty['total']);
    this.quantity.emit(totalQty['quantity']);
  }

  removeCart(product){
    if(product.quantity>0){
      this.shoppingCartTemp = cloneDeep(this.productlistService.getShoppingCart());
      if(this.shoppingCartTemp.some(x => x.productId === product.productId)){
        for (var i in this.shoppingCartTemp) {
          if (this.shoppingCartTemp[i].productId = product.productId) {
            product["total"]-= product.discountedPrice;
            product["quantity"]-= 1;
             break; 
          }
        }
      }
      this.productlistService.addToShoppingCart(product);
      this.shoppingCartTemp = cloneDeep(this.productlistService.getShoppingCart());
      this.filteredProduct.emit(this.shoppingCartTemp);
      const totalQty = this.getShoppingCartTotalQty();
      this.total.emit(totalQty['total']);
      this.quantity.emit(totalQty['quantity']);
    }
  }

  getShoppingCartTotalQty() {
    this.shoppingCartTemp = cloneDeep(this.productlistService.getShoppingCart());
    let totalQty = {'total':0,'quantity':0}
    for (var i=0; i<this.shoppingCartTemp.length; i++) {
      totalQty['total'] += this.shoppingCartTemp[i].total;
      totalQty['quantity'] += this.shoppingCartTemp[i].quantity;
  }
    return totalQty;
  }
}
