import { NgModule } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatGridListModule,
    MatCardModule
  ],
  exports: [
    MatButtonToggleModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatGridListModule,
    MatCardModule
  ]
})
export class CustomMaterialModule { }
