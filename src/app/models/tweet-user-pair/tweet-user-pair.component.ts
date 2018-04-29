import { TweetUserPair, toggleLike } from './../../data-models/MainModels/TweetUserPair';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'tweet-user-pair',
  templateUrl: './tweet-user-pair.component.html',
  styleUrls: ['./tweet-user-pair.component.css']
})
export class TweetUserPairComponent implements OnInit {

  @Input() pair: TweetUserPair;

  pair$: Observable<TweetUserPair>;
  change: Subject<(oldPair: TweetUserPair) => TweetUserPair>;
  showReplyForm: boolean = false;


  constructor(private router: Router) { }

  ngOnInit() {
    this.change = new Subject();
    //this.pair$ = new Observable<TweetUserPair>().startWith(this.pair);
    this.pair$ = this.change.scan( (x,y) => y(x), this.pair ).startWith(this.pair);
  }

  showTweetForm(){
    this.showReplyForm = !this.showReplyForm;
    console.log("hello there");
  }

  goToUser(username : string){
    this.router.navigate(['/user', username]);
  }

  goToTweet(tweetID : number){
    this.router.navigate(['/tweet', tweetID]);
  }

  newChange(func: (oldPair: TweetUserPair) => TweetUserPair){
    this.change.next(func);
  }
}
