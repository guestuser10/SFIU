import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-abierto-dialog',
  templateUrl: './abierto-dialog.component.html',
  styleUrls: ['./abierto-dialog.component.css']
})
export class AbiertoDialogComponent {
  constructor(public dialogRef: MatDialogRef<AbiertoDialogComponent>) {}
}
