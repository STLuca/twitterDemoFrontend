import { Observable } from 'rxjs/Observable';
import { LoginService } from "../Services/LoginService";
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private loginService: LoginService, private router: Router){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        const authHeader = this.loginService.getAuthValue();
        const authReq = req.clone({setHeaders: {Authorization: authHeader}});
        
        return next.handle(authReq).do((event: HttpEvent<any>) => {
            //console.log("hi" + event);
            return event;
        }, (err: any) => {
            if (err instanceof HttpErrorResponse){
                if (err.status === 401) {
                    this.router.navigate(['/login']);
                }
            }
        }
    );
    }

}   