import { NgModule } from '@angular/core';
import { ProductDetailCardComponent } from './product-detail-card/product-detail-card.component';
import { ProductQuantityCardComponent } from './product-quantity-card/product-quantity-card.component';
import { CheckoutCardComponent } from './checkout-card/checkout-card.component';
import { CheckoutPopupComponent } from './checkout-popup/checkout-popup.component';

const components = [
    ProductDetailCardComponent,
    ProductQuantityCardComponent,
    CheckoutCardComponent,
    CheckoutPopupComponent
  ];

@NgModule({
    declarations: [...components],
    exports: [...components]
})
export class SharedModule { }
