import { FilterValue } from './../Filter/FilterValue';
import { Pagination } from '../../UtilModule/DataModels/Pagination';

export class FilteredPageData {

    constructor(public filters: FilterValue[],
                public pageData: Pagination){}
}