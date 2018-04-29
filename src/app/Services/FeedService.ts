
import { ParsedFilter } from '../data-models/util/ParsedFilter';
import { UtilService } from './UtilService';
import { FilterValue } from './../data-models/Filter/FilterValue';
import { CombinedDTO, combinedDTOtoTweetUserPairList } from './../data-models/DTOs/CombinedDTO';
import { TweetUserPair } from './../data-models/MainModels/TweetUserPair';



import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as Rx from 'rxjs/Rx';

import { Observable } from 'rxjs/Observable';
import { FilteredPageData } from '../data-models/util/FilteredPageData';


export interface IFeedService {
  getFeed(data: FilteredPageData)
}

@Injectable()
export class FeedService implements IFeedService{

  constructor(private http: HttpClient,
            public utilService: UtilService) {
              console.log(this.utilService);
            }

  getFeed(data: FilteredPageData): Rx.Observable<TweetUserPair[]>{
    console.log("memes");
    console.log(data);
    console.log(this.utilService);
    var parsedFilters: ParsedFilter = this.utilService.getPagedUrlDetails(data.filters, data.pageData);

    console.log('http://localhost:8080/feed/' + parsedFilters.urlString, parsedFilters.params);

    return this.http.get<CombinedDTO>("http://localhost:8080/feed/" + parsedFilters.urlString, 
                                      { params: parsedFilters.params} )
              .map(data => combinedDTOtoTweetUserPairList(data));
  }

}