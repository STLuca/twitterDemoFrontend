import { TweetUserPair } from './../../data-models/MainModels/TweetUserPair';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { UserService } from '../../Services/UserService';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import * as Rx from 'rxjs/Rx';
import { Pagination } from '../../UtilModule/DataModels/Pagination';
@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  private searchedTerm: Observable<String>;
  private inputFunction: Observable<(pageData: Pagination) => Observable<TweetUserPair[]>>;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.searchedTerm = this.route.paramMap.map(params => params.get('username'))
    this.inputFunction = this.route.paramMap.map( (params: ParamMap ) => (
      (pageData: Pagination) => this.userService.searchForUser(params.get('username'), pageData)));
    
  }

}
