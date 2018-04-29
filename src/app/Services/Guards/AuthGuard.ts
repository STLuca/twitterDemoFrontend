import { CanActivate } from "@angular/router/src/interfaces";
import { Injectable } from "@angular/core";
import { LoginService } from "../LoginService";


@Injectable()
export class AuthGuard implements CanActivate {

    constructor() {}

    canActivate(): boolean {
        //return this.loginService.isAuthenticated();
        return true;
    }

}