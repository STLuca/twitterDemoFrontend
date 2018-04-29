import { TweetService } from './../../Services/TweetService';
import { TweetDTO } from './../../data-models/DTOs/TweetDTO';

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { toggleLike } from '../../data-models/MainModels/TweetUserPair';

//import * as Rx from 'rxjs/Rx';

@Component({
  selector: 'tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  @Input() tweet: TweetDTO;
  @Output() showTweetForm: EventEmitter<any> = new EventEmitter();
  @Output('toggleLike') toggleLike$ = new EventEmitter<any>();
  @Output('tweetSelected') goToTweet$ = new EventEmitter<number>();
  //private showTweet: boolean = false;
  //private showReply: Observable<boolean>;

  constructor(private tweetService: TweetService) { 
    
  }

  ngOnInit() {
    
  }

  goToTweet(){
    this.goToTweet$.emit(this.tweet.id);
  }

  toggleReplyTo(){
    this.showTweetForm.emit();
  }

  toggleLikeTweet(){
    
    if (this.tweet.iLiked){
      this.tweetService.unlikeTweet(this.tweet.id.toString()).subscribe(_ => this.toggleLike$.emit(toggleLike));
    } else {
      this.tweetService.likeTweet(this.tweet.id.toString()).subscribe(_ => this.toggleLike$.emit(toggleLike));
    }
    
  }

}
