import { OnInit, Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-checkout-popup',
  templateUrl: './checkout-popup.component.html',
  styleUrls: ['./checkout-popup.component.scss']
})
export class CheckoutPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef < CheckoutPopupComponent >, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
}
