import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-resuelto-dialog',
  templateUrl: './resuelto-dialog.component.html',
  styleUrls: ['./resuelto-dialog.component.css']
})
export class ResueltoDialogComponent {
  constructor(public dialogRef: MatDialogRef<ResueltoDialogComponent>) {}
}
