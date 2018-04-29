
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UtilService } from './Services/UtilService';
import { UserService } from './Services/UserService';
import { TweetService } from './Services/TweetService';
import { FeedService } from './Services/FeedService';

import { Component, Type } from '@angular/core';
import * as Rx from 'rxjs/Rx';
import { TweetDTO } from './data-models/DTOs/TweetDTO';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
              './app.component.scss-theme.scss'],
  providers: [FeedService, TweetService, UserService, UtilService]
})
export class AppComponent {

  /*
  private myFilter = TweetFilter;
  private pageSizes: number[] = [5, 10, 20, 40];
  private timeouts: number[] = [1000, 3000, 6000];
  nextPage(val: [string[], Pagination]){
    console.log(val);
  }

  private myTree: Tree<number> = {
    value: 1,
    children: [
      {
        value: 2,
        children: [
          {
            value: 3
          },
          {
            value: 4
          }
        ]
      },
      {
        value: 5
      },
      {
        value: 6
      }
    ]
  };

  private aPairList: TweetUserPair[] = [];

  private dTree: DynamicTree<number> = {
    nodes: [
      {
        value: 5,
        children: [
          {
            nodes: [
              {
                value: 5
              },
              {
                value: 10,
                children: [
                  {
                    nodes: [
                      {
                        value: 5,
                        children: [
                          {
                            nodes: [
                              {
                                value: 5
                              },
                              {
                                value: 10,
                                children: [
                                  
                                ]
                              }
                            ],
                            selected: 0
                          }    
                        ]
                      },
                      {
                        value: 10
                      }
                    ],
                    selected: 0
                  }
                ]
              }
            ],
            selected: 0
          }    
        ]
      },
      {
        value: 10
      }
    ],
    selected: 0
  }

  constructor(){
    this.createNewTree();

    this.aPairList.push(LoadingPair);
    this.aPairList.push(LoadingPair);
    this.aPairList.push(LoadingPair);
    this.aPairList.push(LoadingPair);
    this.aPairList.push(LoadingPair);

  }
  
  createNewTree(){
    this.timeouts.forEach(x => setTimeout(() => {
      this.myTree =  mapTree(this.myTree, a => a + 1)
      }, x));
    //console.log(this.myTree);
    //console.log(  mapTree(this.myTree, a => a + 1) );
  }

constructor(){
    var toggle1 = toggleLike(this.aTweet)
    var toggle2 = toggleLike(toggle1)
    console.log(this.aTweet)
    console.log(toggle1)
    console.log(toggle2)
  }
}
  




*/
  private aTweet: TweetDTO = {
    id: 4,
    userID: 1,
    message: "hi",
    timestamp: "44",
    replyTo: 5,
    numOfLikes: 1,
    numOfReplies: 7,
    iLiked: false
  }
  
  
}