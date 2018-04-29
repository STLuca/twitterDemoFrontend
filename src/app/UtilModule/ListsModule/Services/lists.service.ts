import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ListService {

  private reset : Subject<any>;

  constructor() {
    this.reset = new Subject<any>();
   }

  getResetStream() : Observable<any> {
    return this.reset.asObservable();
  }

  nextReset() {
    this.reset.next();
  }

}
