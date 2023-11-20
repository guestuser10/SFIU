import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';

import { FormsModule } from '@angular/forms';
import { TextFieldModule } from '@angular/cdk/text-field';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
        
    MatToolbarModule, 
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    TextFieldModule,
    MatDialogModule,
  ],
  exports:[
    MatToolbarModule, 
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    TextFieldModule,
    MatDialogModule,
  ],
})
export class AngMatImpModule { 
}
