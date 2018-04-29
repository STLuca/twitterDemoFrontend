import { TweetService } from './../../Services/TweetService';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tweet-form',
  templateUrl: './tweet-form.component.html',
  styleUrls: ['./tweet-form.component.css']
})
export class TweetFormComponent implements OnInit {

  @Input()
  private replyToID: number = null;

  private message: string = '';

  constructor(private tweetService: TweetService) { }

  ngOnInit() {
  }

  createTweet(){
    this.tweetService.postTweet(this.message, this.replyToID);
    this.message = "";
  }

}
