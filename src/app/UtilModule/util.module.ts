
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyButtonGroupComponent } from './util/my-button-group/my-button-group.component';
import { MyTreeComponent } from './util/my-tree/my-tree.component';

import { DyncamicTreeComponent } from './util/dyncamic-tree/dyncamic-tree.component';
import { SelectedTreeComponent } from './util/selected-tree/selected-tree.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { ListsModule } from './ListsModule/lists.module';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    ListsModule
  ],
  declarations: [ 
    
    MyButtonGroupComponent,
    MyTreeComponent,
    DyncamicTreeComponent,
    SelectedTreeComponent
  ],
  exports: [
    MyButtonGroupComponent,
    MyTreeComponent,
    DyncamicTreeComponent,
    ListsModule
  ]
})
export class UtilModule { }
