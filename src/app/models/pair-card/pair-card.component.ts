import { Component, OnInit, Input } from '@angular/core';
import { TweetUserPair } from '../../data-models/MainModels/TweetUserPair';
import { User } from '../../data-models/MainModels/User';

@Component({
  selector: 'pair-card',
  templateUrl: './pair-card.component.html',
  styleUrls: ['./pair-card.component.css']
})
export class PairCardComponent implements OnInit {

  //@Input() pair: TweetUserPair;
  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
