import { FilterValue } from './../../data-models/Filter/FilterValue';
import { TweetService } from './../../Services/TweetService';
import { TweetFilter } from './../../data-models/Filter/FiltersDefs';
import { Observable } from 'rxjs/Observable';
import { LoadingPair } from './../../data-models/MainModels/Loading';
import { TweetUserPair } from './../../data-models/MainModels/TweetUserPair';
import { Tweet } from './../../data-models/MainModels/Tweet';

import { FeedService } from './../../Services/FeedService';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import * as Rx from 'rxjs/Rx';
import { LoadingTweet } from '../../data-models/MainModels/Loading';
import { FilteredPageData } from '../../data-models/util/FilteredPageData';
import { Group } from '../../UtilModule/DataModels/Group';


@Component({
  selector: 'app-tweet-page',
  templateUrl: './tweet-page.component.html',
  styleUrls: ['./tweet-page.component.css']
})
export class TweetPageComponent implements OnInit {

  private tweet: Rx.Observable<TweetUserPair>;
  private filter: Group<FilterValue>;
  private serverMethod: Observable<(data: FilteredPageData) => Observable<TweetUserPair[]>>;

  constructor(
    private tweetService: TweetService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.filter = TweetFilter;
    this.serverMethod = this.route.paramMap
    .map( (params: ParamMap) => ( data => this.tweetService.getReplies(params.get('id'), data)));
    this.tweet = this.route.paramMap
      .switchMap( (params: ParamMap) => this.tweetService.getTweet(params.get('id')) )
      .startWith(LoadingPair);
  }

}
