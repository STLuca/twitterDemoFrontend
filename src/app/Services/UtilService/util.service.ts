
import { HttpParams } from '@angular/common/http';
import { ParsedFilter } from './../../data-models/util/ParsedFilter';
import { FilterValue } from './../../data-models/Filter/FilterValue';
import { Injectable } from '@angular/core';
import { Pagination } from '../../UtilModule/DataModels/Pagination';
import { FilteredPageData } from '../../data-models/util/FilteredPageData';
import { Observable } from 'rxjs/Observable';
import { TweetUserPair } from '../../data-models/MainModels/TweetUserPair';
import { HttpClient } from '@angular/common/http';
import { combinedDTOtoTweetUserPairList, CombinedDTO } from '../../data-models/DTOs/CombinedDTO';

@Injectable()
export class UtilService {

  constructor(private http: HttpClient) {}

    partition<T>(array: Array<T>, filterFunction: (val: T) => boolean){
        var matched: T[] = []
        var unmatched: T[] = [];

        array.forEach(x => (filterFunction(x) ? matched : unmatched).push(x));
        return [matched, unmatched];
    }

    getUrlDetails(filters: FilterValue[]): ParsedFilter{
        var splitFilter = this.partition(filters, (val: FilterValue) =>  (typeof val === "string"));
        var urlString: string = splitFilter[0].map(val => val + "/")
                                .reduce((prev, curr) => prev.concat(curr), "")
        var params: HttpParams = new HttpParams();
        splitFilter[1].forEach(x => params = params.set(x[0], x[1]));
        return {
            urlString: urlString,
            params: params
        }
    }

    appendPageFilters(filters: FilterValue[], pageData: Pagination): FilterValue[]{
        var newPageData: FilterValue[] = [
            ["page", pageData.page.toString()],
            ["size", pageData.count.toString()]
        ];
        return filters.concat(newPageData);
    }

    getPagedUrlDetails(filters: FilterValue[], pageData: Pagination): ParsedFilter{
        return this.getUrlDetails( this.appendPageFilters(filters, pageData) );
    }

    getTweetUserPairList(urlString: string, data: FilteredPageData): Observable<TweetUserPair[]>{

      var parsedFilters: ParsedFilter = this.getPagedUrlDetails(data.filters, data.pageData);
      
      return this.http.get<CombinedDTO>('http://localhost:8080/' + urlString + parsedFilters.urlString, 
                                        { params: parsedFilters.params} )
                .map(data => combinedDTOtoTweetUserPairList(data));
    }

}