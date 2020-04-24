import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as cloneDeep from 'lodash/cloneDeep';

@Injectable({ providedIn: 'root' })
export class ProductlistService {
  shoppingCartTempValue:any = [];
  constructor(private httpClient: HttpClient) {}

  getProductList() {
      return this.httpClient.get('assets/jsonData/productList.json');
  }

  addToShoppingCart(shopping) {
    let shoppingCartVal = this.getShoppingCart();
    if(shoppingCartVal.some(x => x.productId === shopping.productId)){
      for (var i in shoppingCartVal) {
        if (shoppingCartVal[i].productId === shopping.productId) {
          shoppingCartVal[i].total = shopping.total;
          shoppingCartVal[i].quantity = shopping.quantity;
          this.shoppingCartTempValue = cloneDeep(shoppingCartVal);
           break; 
        }
      }
    } else{
      this.shoppingCartTempValue.push(shopping);
    }
  }

  getShoppingCart() {
    return this.shoppingCartTempValue;
  }
}
