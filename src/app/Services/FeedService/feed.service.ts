import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as Rx from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { ParsedFilter } from '../../data-models/util/ParsedFilter';
import { UtilService } from './../UtilService';
import { CombinedDTO, combinedDTOtoTweetUserPairList } from './../../data-models/DTOs/CombinedDTO';
import { TweetUserPair } from './../../data-models/MainModels/TweetUserPair';
import { FilteredPageData } from '../../data-models/util/FilteredPageData';


@Injectable()
export class FeedService {

  constructor(private http: HttpClient,
              private utilService: UtilService) {}

  getFeed(data: FilteredPageData): Rx.Observable<TweetUserPair[]>{
    
    var parsedFilters: ParsedFilter = this.utilService.getPagedUrlDetails(data.filters, data.pageData);

    console.log('http://localhost:8080/feed/' + parsedFilters.urlString, parsedFilters.params);

    return this.http.get<CombinedDTO>("http://localhost:8080/feed/" + parsedFilters.urlString, 
                                      { params: parsedFilters.params} )
              .map(data => combinedDTOtoTweetUserPairList(data));
  }

}
