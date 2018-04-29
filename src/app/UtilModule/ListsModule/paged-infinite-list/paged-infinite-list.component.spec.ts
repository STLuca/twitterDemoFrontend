import { Subject } from 'rxjs/Subject';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagedInfiniteListComponent } from './paged-infinite-list.component';
import { InfinitelistComponent } from '../infinitelist/infinitelist.component';

describe('PagedInfiniteListComponent', () => {
  let component: PagedInfiniteListComponent;
  let fixture: ComponentFixture<PagedInfiniteListComponent>;
  let resetStream: Subject<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        PagedInfiniteListComponent,
        InfinitelistComponent
     ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagedInfiniteListComponent);
    component = fixture.componentInstance;
    resetStream = new Subject();
    component.reset = resetStream;
    fixture.detectChanges();

    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should work without pushing an initial reset value', () => {
    spyOn(component.page, 'emit');
    component.onNextPage();
    expect(component.page.emit).toHaveBeenCalled();

  })

  it('should increment by 1 with every nextPage event', () => {
    spyOn(component.page, 'emit');
    component.onNextPage();
    expect(component.page.emit).toHaveBeenCalledWith(1);
    component.onNextPage();
    expect(component.page.emit).toHaveBeenCalledWith(2);
    component.onNextPage();
    expect(component.page.emit).toHaveBeenCalledWith(3);

  })

  it('should reset with new resetStream value', () => {

    spyOn(component.page, 'emit');
    component.onNextPage();
    component.onNextPage();
    expect(component.page.emit).toHaveBeenCalledWith(2);
    resetStream.next();
    expect(component.page.emit).toHaveBeenCalledWith(0);

  })
});
