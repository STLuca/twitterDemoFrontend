
import { HttpParams } from '@angular/common/http';
import { ParsedFilter } from './../data-models/util/ParsedFilter';
import { FilterValue } from './../data-models/Filter/FilterValue';
import { Injectable } from '@angular/core';
import { Pagination } from '../UtilModule/DataModels/Pagination';

@Injectable()
export class UtilService {

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

}