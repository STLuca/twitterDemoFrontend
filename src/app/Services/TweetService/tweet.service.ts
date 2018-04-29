import { FilteredPageData } from './../../data-models/util/FilteredPageData';
import { TweetUserPair } from './../../data-models/MainModels/TweetUserPair';
import { combinedDTOtoTweetUserPairList } from './../../data-models/DTOs/CombinedDTO';
import { CombinedDTO } from './../../data-models/DTOs/CombinedDTO';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as Rx from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Tweet } from '../../data-models/MainModels/Tweet';
import { UtilService } from './../UtilService';
import { ParsedFilter } from '../../data-models/util/ParsedFilter';

export interface ITweetService {
  getTweet(tweetID: string): Rx.Observable<TweetUserPair>;
  postTweet(message: string, replyToID: number);
  getReplies(tweetID: string, data: FilteredPageData): Rx.Observable<TweetUserPair[]>;
  likeTweet(tweetID: string);
  unlikeTweet(tweetID: string);
}

@Injectable()
export class TweetService implements ITweetService{

  constructor(private http: HttpClient,
              private utilService: UtilService) {}

  getTweet(tweetID: string): Rx.Observable<TweetUserPair>{
    return this.http.get<CombinedDTO>('http://localhost:8080/tweet/' + tweetID)
      .map(data => combinedDTOtoTweetUserPairList(data))
      .map(list => list[0]);
  }

  postTweet(message: string, replyToID: number){
    
    if (replyToID == 0 ){
      this.http.post("http://localhost:8080/tweet/", JSON.stringify(message)).subscribe(x => console.log(x));
    } else {
      this.http.post("http://localhost:8080/tweet/" + replyToID, JSON.stringify(message)).subscribe(x => console.log(x));
    }
    
  }

  getReplies(tweetID: string, data: FilteredPageData): Rx.Observable<TweetUserPair[]>{

    var parsedFilters: ParsedFilter = this.utilService.getPagedUrlDetails(data.filters, data.pageData);
    

    return this.http.get<CombinedDTO>('http://localhost:8080/tweet/' + tweetID + '/replies/' + parsedFilters.urlString, 
                                      { params: parsedFilters.params} )
              .map(data => combinedDTOtoTweetUserPairList(data));
  }

  likeTweet(tweetID: string){
    return this.http.post('http://localhost:8080/tweet/' + tweetID + '/like', {});
  }

  unlikeTweet(tweetID: string){
    return this.http.delete('http://localhost:8080/tweet/' + tweetID + '/like');
  }
}