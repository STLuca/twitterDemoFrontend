import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './../../../custom-material/custom-material.module';

import { Subject } from 'rxjs/Subject';
import { PagedInfiniteListComponent } from './../paged-infinite-list/paged-infinite-list.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatedListComponent } from './paginated-list.component';
import { InfinitelistComponent } from '../infinitelist/infinitelist.component';
import { Pagination } from '../../DataModels/Pagination';

describe('PaginatedListComponent', () => {
  let component: PaginatedListComponent;
  let fixture: ComponentFixture<PaginatedListComponent>;
  let pageSizes: number[];
  let startPageSize: number;
  let resetStream: Subject<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CustomMaterialModule,
        BrowserAnimationsModule
      ],
      declarations: [ 
        PaginatedListComponent,
        PagedInfiniteListComponent,
        InfinitelistComponent
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatedListComponent);
    component = fixture.componentInstance;

    resetStream = new Subject();
    pageSizes = [5, 10, 20];
    startPageSize = 5;

    component.reset = resetStream;
    component.pageSizes = pageSizes;
    component.startPageSize = startPageSize;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('next page should only change the page number', () =>{
    spyOn(component.pagination, 'emit');
    component.nextPage(1);
    expect(component.pagination.emit).toHaveBeenCalledWith(new Pagination(1, 5));
  })

  it('New page size should reset the page number and change the page size', () => {
    spyOn(component.pagination, 'emit');
    component.setPageSize(10);
    expect(component.pagination.emit).toHaveBeenCalledWith(new Pagination(0, 10));
  });

  it('page size should not reset when new page size is same as before', () => {
    spyOn(component.pagination, 'emit');
    component.setPageSize(5);
    expect(component.pagination.emit).toHaveBeenCalledTimes(0);
  })

});
