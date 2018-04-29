import { Observable } from 'rxjs/Observable';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Component, OnInit, Input, TemplateRef, Output } from '@angular/core';
import { Tree } from '../../DataModels/Tree';


@Component({
  selector: 'selected-tree',
  templateUrl: './selected-tree.component.html',
  styleUrls: ['./selected-tree.component.css']
})
export class SelectedTreeComponent<T> implements OnInit {

  @Input() template: TemplateRef<any>;
  @Input() tree: Tree<T>;
  @Output() output: Observable<Tree<string>>;

  private selected: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private input: Observable<[number, T]>;

  constructor() { }

  ngOnInit() {
    //this.trees[0].children.map( (val, index) => this.input.filter( obVal => obVal[0] == index )
  }

  select(index){
    this.selected.next(index);
  }

  
}
