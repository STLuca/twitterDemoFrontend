import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import * as Rx from 'rxjs/Rx';
import { Pagination } from '../../DataModels/Pagination';

@Component({
  selector: 'paginated-list',
  templateUrl: './paginated-list.component.html',
  styleUrls: ['./paginated-list.component.css']
})
export class PaginatedListComponent implements OnInit {

  @Input() reset: Observable<any>;
  @Input() pageSizes: number[];
  @Input('start') startPageSize: number;

  @Output('nextPage') pagination: EventEmitter<Pagination> = new EventEmitter<Pagination>();

  private currentPageSize: Subject<number>; 
  private pageNumber: Subject<number> = new Subject<number>();

  private newReset: Observable<any>;

  constructor() { }

  ngOnInit() {
    //stream of selected page size starting with the input startPageSize
    this.currentPageSize = new BehaviorSubject<number>(this.startPageSize);

    //stream of distinct selected page size 
    var pageSize = this.currentPageSize.distinctUntilChanged(); 
    
    //joins the input reset stream with a reset for when the selected page size changes
    this.newReset = Rx.Observable.merge(this.reset, pageSize);

    //everytime the selected page size changes, subscribe to the pageNumber stream and create a pagination from the page number and size
    //
    pageSize.switchMap( pageSize => this.pageNumber.map(
      pageNum => new Pagination(pageNum, pageSize)
    )).skip(1)
    .subscribe(pagination => this.pagination.emit(pagination));
  }

  setPageSize(pageSize: number){
    this.currentPageSize.next(pageSize);
  }

  nextPage(pageNum: number){
    this.pageNumber.next(pageNum);
  }

}
