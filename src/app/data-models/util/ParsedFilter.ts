import { HttpParams } from '@angular/common/http';

export interface ParsedFilter {
    urlString: string;
    params: HttpParams;
}