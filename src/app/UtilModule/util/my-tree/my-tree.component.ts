
import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { Tree } from '../../DataModels/Tree';



@Component({
  selector: 'my-tree',
  templateUrl: './my-tree.component.html',
  styleUrls: ['./my-tree.component.css']
})
export class MyTreeComponent<T> implements OnInit {

  @Input('template') treeValueTemplate: TemplateRef<any>;
  @Input() tree: Tree<T>;
  
  constructor() { }

  ngOnInit() {}

}
