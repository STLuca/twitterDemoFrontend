
import { FilterValue } from './../../data-models/Filter/FilterValue';
import { FilteredPageData } from './../../data-models/util/FilteredPageData';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { TweetUserPair } from './../../data-models/MainModels/TweetUserPair';

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import * as Rx from 'rxjs/Rx';
import { Group } from '../../UtilModule/DataModels/Group';
import { Pagination } from '../../UtilModule/DataModels/Pagination';
import { Tree, treeToList } from '../../UtilModule/DataModels/Tree';




@Component({
  selector: 'filtered-list',
  templateUrl: './filtered-list.component.html',
  styleUrls: ['./filtered-list.component.css']
})
export class FilteredListComponent implements OnInit {

  //observable gets pushed a function that takes a group of filters, and a page number
  //and outputs a function that takes a page number and outputs a list of T 
  //this gets pushed to the infinite list
  @Input() private filter: Group<FilterValue>;
  @Input() private pageSizes: number[]; // = [5, 10, 20, 40];
  @Output() private output = new EventEmitter<FilteredPageData>();
  @Output() private reset = new EventEmitter<any>();
  private currentPageValue = new Subject<Pagination>();
  private currentFilterValue = new Subject<FilterValue[]>();
  
  

  

  /*
  private functionStream: Rx.Subject<(pageData: Pagination) => Rx.Observable<TweetUserPair[]>>
           = new Rx.Subject<(pageData: Pagination) => Rx.Observable<TweetUserPair[]>>();
  
  @Input()
  private inputFunction: (filters: string[]) => (pageData: Pagination) => Rx.Observable<TweetUserPair[]>;
  */

  constructor() { }

  ngOnInit() {
    
    Observable.merge(this.currentFilterValue, this.currentPageValue.distinctUntilChanged((p1, p2) => p1.count === p2.count))
    .subscribe(_ => this.reset.emit());
    //Observable.combineLatest(this.currentFilterValue, this.currentPageValue)
    //          .subscribe(val => this.output.emit(val));

    this.currentFilterValue.switchMap(filterVal => 
      this.currentPageValue.map(page => new FilteredPageData(filterVal, page))
    )
    .subscribe(val => this.output.emit(val));
  }

  nextFilter(filters: Tree<FilterValue>){
    this.currentFilterValue.next(treeToList(filters));
    console.log(treeToList(filters));
    //this.functionStream.next(this.inputFunction($event));
  }

  nextPage(page: Pagination){
    this.currentPageValue.next(page);
    
  }
}
