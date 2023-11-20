import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-revision-dialog',
  templateUrl: './revision-dialog.component.html',
  styleUrls: ['./revision-dialog.component.css']
})
export class RevisionDialogComponent {
  selectedDate: Date = new Date();
  constructor(public dialogRef: MatDialogRef<RevisionDialogComponent>) {}
}
