import { Subject } from 'rxjs/Subject';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import * as Rx from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'paged-infinite-list',
  templateUrl: './paged-infinite-list.component.html',
  styleUrls: ['./paged-infinite-list.component.css']
})
export class PagedInfiniteListComponent implements OnInit {

  @Input() reset: Observable<any>;

  private clicks: Subject<any> = new Subject<any>();
  @Output() page: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    
    this.reset.startWith(0)
              .switchMap(_ => this.clicks.startWith(null)
                                         .scan( (count, _) => count + 1,  -1))
              .subscribe(x => this.page.emit(x));
    
  }

  onNextPage(){
    this.clicks.next();
  }

}
