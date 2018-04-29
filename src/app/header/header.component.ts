import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Services/LoginService';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  private loggedInAs: Observable<string>;
  private loginButtonText: Observable<string>;
  private myPage: Observable<string>;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loggedInAs = this.loginService.getCurrentUser();
    this.loginButtonText = this.loggedInAs.map(x => {
      if (x == ''){
        return 'LOGIN';
      } else {
        return 'LOGOUT';
      };
    });
    
    this.myPage = this.loggedInAs.map(username => "user/" + username);
  }

  
}
