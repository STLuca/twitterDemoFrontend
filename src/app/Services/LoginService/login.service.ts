import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class LoginService {

    private currentUser: Subject<string> = new BehaviorSubject<string>('');
    private basicAuthValue: string = '';
    private authenticated: boolean = false;

    constructor(){
    }

    getAuthValue(): string {
        return this.basicAuthValue;
    }

    getCurrentUser(): Observable<string> {
        return this.currentUser;
    }

    logout(): void {
        this.basicAuthValue = null;
        this.authenticated = false;
        this.currentUser.next("");
    }

    login(username: string, password: string){
        this.basicAuthValue = "Basic " + btoa(username + ":" + password);
        this.currentUser.next(username);
        this.authenticated = true;
        //this.http.get<string>("/login").subscribe( name => {this.currentUser.next(name);
          //                                                       this.authenticated = true;},
        //                                                err => this.basicAuthValue = null);
    }

    isAuthenticated(): boolean {
        return this.authenticated;
    }
}