


import { FilterValue } from './../../../data-models/Filter/FilterValue';

import { Component, OnInit, Input, Output, EventEmitter, ViewChildren, QueryList, AfterViewInit, TemplateRef } from '@angular/core';
import * as Rx from 'rxjs/Rx';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { Observable } from 'rxjs/Observable';
import { Group } from '../../../UtilModule/DataModels/Group';
import { Tree, createTree } from '../../../UtilModule/DataModels/Tree';
import { GroupEntry } from '../../../UtilModule/DataModels/GroupEntry';

@Component({
  selector: 'a-filter',
  templateUrl: './a-filter.component.html',
  styleUrls: ['./a-filter.component.css']
})
export class AFilterComponent<T> implements OnInit {

  @Input() groupTemplate: TemplateRef<any>;
  @Input() entryTemplate: TemplateRef<any>;

  @Input() group: Group<T>;
  @Output() private selectedValues = new EventEmitter<Tree<T>>();

  //subjects
  selectedEntry: Rx.BehaviorSubject<GroupEntry<T>>;
  childrenSelectedValues: Rx.Subject<Tree<T>> = new Rx.Subject<Tree<T>>();
  childIndex: Rx.Subject<number> = new Rx.Subject<number>();

  clear: Observable<boolean>;

  constructor() { }

  ngOnInit() {
    
    
    this.selectedEntry = new Rx.BehaviorSubject<GroupEntry<T>>(this.group.entries[this.group.default]);
    this.clear = this.selectedEntry.mergeMap(x => Observable.merge(Observable.of(false), Observable.of(true).delay(1)));

    let childrenInputs = Observable.zip(this.childrenSelectedValues, this.childIndex);
    let [hasChildren, noChildren] = this.selectedEntry.partition(group => group.children != null);
  

    //if selected group has no children, just output the selected value straight away as a tree with no children
    let noChildrenOutput = 
    noChildren.map( x => createTree(x.value, null));
    
    //if selected group has children, create an observable that outputs an array of the latest tree values of all its children
    let childValues = hasChildren.switchMap( groupEntry => 
      Observable.combineLatest(
          groupEntry.children.map( (val, index) => childrenInputs.filter(childVal => childVal[1] == index).map(val => val[0]))
        )
    )

    //combines the latest 
    let hasChildrenOutput = 
    hasChildren.map(x => x.value).switchMap( groupValue =>
        childValues.map(x => createTree(groupValue, x)))
      
    Observable.merge(noChildrenOutput, hasChildrenOutput)
              .subscribe(val => this.selectedValues.emit(val));

  }

  onClick(val: GroupEntry<T>) {
    this.selectedEntry.next(val);
  }

  nextChildValue(val: Tree<T>, childIndex: number){
    this.childrenSelectedValues.next(val);
    this.childIndex.next(childIndex);
  }

  onChange(group){
    console.log(group);
    this.selectedEntry.next(group);
  }
}
