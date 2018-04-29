import { UserService } from './../../Services/UserService';
import { UserDTO } from './../../data-models/DTOs/UserDTO';

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { toggleFollow } from '../../data-models/MainModels/TweetUserPair';


@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: UserDTO;
  @Output('toggleFollow') toggleFollow$ = new EventEmitter<any>();
  @Output('userSelected') goToUser$ = new EventEmitter<string>();
  
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  goToUser(){
    this.goToUser$.emit(this.user.username);
  }

  follow(): string{
    if (this.user.iFollowing){
      return "Unfollow";
    } else {
      return "Follow";
    }
  }

  toggleFollow(){

    if (this.user.iFollowing){
      this.userService.unfollowUser(this.user.username).subscribe(_ => this.toggleFollow$.emit(toggleFollow));
    } else {
      this.userService.followUser(this.user.username).subscribe(_ => this.toggleFollow$.emit(toggleFollow));
    }
    
  }

}
