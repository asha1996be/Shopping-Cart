import { Component, OnInit, Input } from '@angular/core';
import { CheckoutPopupComponent } from '../checkout-popup/checkout-popup.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-checkout-card',
  templateUrl: './checkout-card.component.html',
  styleUrls: ['./checkout-card.component.scss']
})
export class CheckoutCardComponent implements OnInit {
  @Input( ) total;
  @Input( ) quantity;

  constructor( public dialog: MatDialog ) { }

  ngOnInit(): void {
    this.quantity = 0;
    this.total = 0;
  }

  checkoutPopup(){
    const dialogRef = this.dialog.open(CheckoutPopupComponent, {
      data: {
        total: `${this.total}`,
      },
    });
  }

}
