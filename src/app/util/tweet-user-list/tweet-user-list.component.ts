
import { Subject } from 'rxjs/Subject';
import { TweetUserPair } from './../../data-models/MainModels/TweetUserPair';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FilteredPageData } from '../../data-models/util/FilteredPageData';
import { FilterValue } from '../../data-models/Filter/FilterValue';
import { Group } from '../../UtilModule/DataModels/Group';

@Component({
  selector: 'tweet-user-list',
  templateUrl: './tweet-user-list.component.html',
  styleUrls: ['./tweet-user-list.component.css']
})
export class TweetUserListComponent implements OnInit {
  //This component deals with using the paginated and filter data, calling the input method which
  //generally makes a http request to the server

  //filter to give to filtered-list component
  @Input() filter: Group<FilterValue>;
  //function to use page data to get server data
  @Input('function') serverMethod: (data: FilteredPageData) => Observable<TweetUserPair[]>;

  pageSize = [5, 10, 20, 40];

  //The stream that holds the acc tweets/users, will be projected into child components
  data: Observable<TweetUserPair[]>;

  //A subject stream that gets page data from child filtered list component
  nextPageStream: Subject<FilteredPageData> = new Subject<FilteredPageData>();
  //A subject stream that gets inputs from child filtered list component
  reset = new Subject();

  constructor() { }

  ngOnInit() {
    
    //for every reset, start accumulating the results of the data returned from the server function
    //starting with the empty array
    this.data = this.reset.switchMap(_ => 
      this.nextPageStream.mergeMap( (data: FilteredPageData) => 
        this.serverMethod(data))
        .scan( (acc, curr) => acc.concat(curr), [])
    );
    
  }

  nextPage(pageData: FilteredPageData){
    this.nextPageStream.next(pageData);
  }

  resetList(){
    this.reset.next();
  }

}
