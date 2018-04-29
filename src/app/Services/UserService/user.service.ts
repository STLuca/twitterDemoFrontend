import { ParsedFilter } from './../../data-models/util/ParsedFilter';
import { UtilService } from './../UtilService';
import { UserDTO } from './../../data-models/DTOs/UserDTO';
import { CombinedDTO, combinedDTOtoTweetUserPairList } from './../../data-models/DTOs/CombinedDTO';
import { TweetUserPair } from './../../data-models/MainModels/TweetUserPair';



import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as Rx from 'rxjs/Rx';

import { Observable } from 'rxjs/Observable';
import { FilteredPageData } from '../../data-models/util/FilteredPageData';
import { Pagination } from '../../UtilModule/DataModels/Pagination';



export interface IUserService {
  getUser(username: string): Rx.Observable<TweetUserPair>;
  getData(username: string, data: FilteredPageData): Rx.Observable<TweetUserPair[]>;
  followUser(username: string);
  unfollowUser(username: string);
  registerUser(user);
  searchForUser(searchTerm: string, pageData: Pagination);
}

@Injectable()
export class UserService implements IUserService{

  constructor(private http: HttpClient,
              private utilService: UtilService) {}

  getUser(username: string): Rx.Observable<TweetUserPair> {
    
    return this.http.get<UserDTO>('http://localhost:8080/user/' + username)
                    .map(user => new TweetUserPair(user, null));
  }

  registerUser(user){
    return this.http.post('http://localhost:8080/user/register', user);
  }

  searchForUser(searchTerm: string, pageData: Pagination){
    var parsedFilters: ParsedFilter = this.utilService.getPagedUrlDetails([], pageData);
    return this.http.get<CombinedDTO>('http://localhost:8080/user/search/' + searchTerm + parsedFilters.urlString)
                    .map(data => combinedDTOtoTweetUserPairList(data));
  }

  getData(username: string, data: FilteredPageData): Rx.Observable<TweetUserPair[]> {
    
    var parsedFilters: ParsedFilter = this.utilService.getPagedUrlDetails(data.filters, data.pageData);

    return this.http.get<CombinedDTO>('http://localhost:8080/user/' + username + '/' + parsedFilters.urlString, 
                                      {params: parsedFilters.params} )
              .map(data => combinedDTOtoTweetUserPairList(data));
  }

  getData2(username: string, data: FilteredPageData): Rx.Observable<TweetUserPair[]> {
    return null
  }

  followUser(username: string){
    return this.http.post('http://localhost:8080/user/' + username + '/follows/follow', {});
  }

  unfollowUser(username: string){
    return this.http.delete('http://localhost:8080/user/' + username + '/follows/follow');
  }
}