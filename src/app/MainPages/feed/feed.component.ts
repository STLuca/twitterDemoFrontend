
import { FilterValue } from './../../data-models/Filter/FilterValue';
import { Observable } from 'rxjs/Observable';
import { TweetUserPair } from './../../data-models/MainModels/TweetUserPair';
import { FilteredPageData } from './../../data-models/util/FilteredPageData';
import { TweetFilter } from './../../data-models/Filter/FiltersDefs';



import { FeedService } from './../../Services/FeedService';
import { Component, OnInit } from '@angular/core';

import * as Rx from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { LoadingPair } from '../../data-models/MainModels/Loading';
import { Group } from '../../UtilModule/DataModels/Group';

@Component({
  selector: 'feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  filter: Group<FilterValue> = TweetFilter;
  serverMethod: (data: FilteredPageData) => Observable<TweetUserPair[]>;

  constructor(private feedService: FeedService) { 
    this.serverMethod = (data) => feedService.getFeed(data);
  }

  ngOnInit() { }

}
