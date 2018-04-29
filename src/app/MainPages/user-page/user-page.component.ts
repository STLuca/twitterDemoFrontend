import { FilterValue } from './../../data-models/Filter/FilterValue';
import { Observable } from 'rxjs/Observable';
import { LoadingUser } from './../../data-models/MainModels/Loading';
import { TweetUserPair } from './../../data-models/MainModels/TweetUserPair';

import { FeedService } from './../../Services/FeedService';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import * as Rx from 'rxjs/Rx';
import { UserService } from '../../Services/UserService';
import { User } from '../../data-models/MainModels/User';

import { UserFilter } from '../../data-models/Filter/FiltersDefs';
import { FilteredPageData } from '../../data-models/util/FilteredPageData';
import { Group } from '../../UtilModule/DataModels/Group';



@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent { //implements OnInit {

  private filter: Group<FilterValue>;
  private serverMethod: Observable<(data: FilteredPageData) => Observable<TweetUserPair[]>>;
  private user: Observable<TweetUserPair>;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit() {
      this.filter = UserFilter;
      this.serverMethod = this.route.paramMap.map( (params: ParamMap) => (
        data => this.userService.getData(params.get('username'), data)));
      this.user = this.route.paramMap.switchMap((params: ParamMap) => 
        this.userService.getUser(params.get('username')))
        .startWith(LoadingUser);
    }
  /*
  private myInputFunction: Rx.Observable<(filters: string[]) => (pageData: Pagination) => Rx.Observable<TweetUserPair[]>>;
  private filter: FilterGroup;

  

  
  */
}
