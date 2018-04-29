import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import * as Rx from 'rxjs/Rx';

@Component({
  selector: 'infinitelist',
  templateUrl: './infinitelist.component.html',
  styleUrls: ['./infinitelist.component.css']
})
export class InfinitelistComponent implements OnInit {

  //@Input() debounceTime: number;

  @Output()
  nextPage = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {

    var nextPageButton = document.getElementById("nextPage");
    Observable.fromEvent(nextPageButton, 'click')
              .debounceTime(100)
              .subscribe(x => this.nextPage.emit());
  }

  
}
