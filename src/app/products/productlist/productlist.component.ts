import { Component, OnInit } from '@angular/core';
import { ProductlistService } from 'src/app/Shared/services/product-list.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html'
})
export class ProductlistComponent implements OnInit {
  productList: any;
  qty: any;
  ttl: any;
  filteredProductList: any =[];

  constructor(private productlistService: ProductlistService) { }

  ngOnInit(): void {
    const promise = this.productlistService.getProductList().toPromise();
    promise.then((data)=>{
      this.productList = data;
      this.filteredProductList=data;
    }, (error)=>{
      console.log("Promise rejected with " + JSON.stringify(error));
    })
  }
  onQuantity(qty){
    this.qty = qty; 
  }

  onTotal(total){
  this.ttl = total;
  }
  onfilteredProductList(data){
    this.filteredProductList = data;
    for(var i=0;i<this.productList.length;i++){
      for(var j=0;j<this.filteredProductList.length;j++){
        if(this.productList[i]===this.filteredProductList[j]){
          this.productList[i]=this.filteredProductList[j];
        }
      }
    }
  }
}
