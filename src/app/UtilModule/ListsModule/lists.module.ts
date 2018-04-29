import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagedInfiniteListComponent } from './paged-infinite-list/paged-infinite-list.component';
import { PaginatedListComponent } from './paginated-list/paginated-list.component';
import { InfinitelistComponent } from './infinitelist/infinitelist.component';
import { ListComponent } from './list/list.component';
import { CustomMaterialModule } from '../../custom-material/custom-material.module';
import { ListService } from './Services/lists.service';


@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  declarations: [
    PagedInfiniteListComponent,
    InfinitelistComponent,
    PaginatedListComponent,
    ListComponent
  ],
  exports: [
    PagedInfiniteListComponent,
    InfinitelistComponent,
    PaginatedListComponent,
    ListComponent
  ],
  providers: [
    ListService
  ]
})
export class ListsModule { }
