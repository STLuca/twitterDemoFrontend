import { HttpEvent } from '@angular/common/http/src/response';
import { Observable } from 'rxjs/Observable';
import { HttpHandler } from '@angular/common/http/src/backend';
import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http/src/request';


export class ContentTypeInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        
        const authReq = req.clone({headers: req.headers.set('Content-Type', 'application/json')});
        return next.handle(authReq);
    }

}