import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetUserListComponent } from './tweet-user-list.component';
import { TweetFilter } from '../../data-models/Filter/FiltersDefs';
import { Group } from '../../UtilModule/DataModels/Group';
import { FilterValue } from '../../data-models/Filter/FilterValue';
import { Observable } from 'rxjs/Observable';
import { FilteredPageData } from '../../data-models/util/FilteredPageData';
import { TweetUserPair } from '../../data-models/MainModels/TweetUserPair';
import { testPair } from '../../data-models/MainModels/test';
import { UtilModule } from '../../UtilModule/util.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Pagination } from '../../UtilModule/DataModels/Pagination';

fdescribe('TweetUserListComponent', () => {
  let component: TweetUserListComponent;
  let fixture: ComponentFixture<TweetUserListComponent>;

  let filter: Group<FilterValue>;
  let testFunction: (data: FilteredPageData) => Observable<TweetUserPair[]>;
  let testFilteredPageData: FilteredPageData = new FilteredPageData(['test'], new Pagination(0,0));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetUserListComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetUserListComponent);
    component = fixture.componentInstance;

    filter = TweetFilter;
    testFunction = (data) => Observable.of([testPair])

    component.filter = filter;
    component.serverMethod = testFunction;

    fixture.detectChanges();

    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('calling next page should add test pair to observable stream', () => {
    component.data.subscribe( data => expect(data).toEqual([testPair]));
    component.resetList();
    component.nextPage(testFilteredPageData);
  });

  it('calling next page twice should should result in accumulated array', () => {
    
    component.resetList();
    component.nextPage(testFilteredPageData);
    component.data.subscribe( data => expect(data).toEqual([testPair]));
    component.nextPage(testFilteredPageData);
  });

  it('reset should cause data to be an empty list', () => {
    component.data.subscribe( data => expect(data).toEqual([testPair]));
    component.resetList();
  });

  it('reset should reset data to an empty list', () => {
    component.resetList();
    component.nextPage(testFilteredPageData);
    component.data.subscribe( data => expect(data).toEqual([]));
    component.resetList();
  });

  
});
