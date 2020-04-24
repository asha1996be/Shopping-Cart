import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-detail-card',
  templateUrl: './product-detail-card.component.html',
  styleUrls: ['./product-detail-card.component.scss']
})
export class ProductDetailCardComponent implements OnInit {
  @Input( ) product;
  @Output() ttl = new EventEmitter<number>();
  @Output() qty = new EventEmitter<number>();
  @Output() filteredProductList = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
  onQuantity(qty){
    this.qty.emit(qty);
    }

  onTotal(total){
    this.ttl.emit(total);
   }
   OnfilteredProduct(filteredProduct){
    this.filteredProductList.emit(filteredProduct);
   }
}
