import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { DynamicTree } from '../DynamicTree';

@Component({
  selector: 'dyncamic-tree',
  templateUrl: './dyncamic-tree.component.html',
  styleUrls: ['./dyncamic-tree.component.css']
})
export class DyncamicTreeComponent<T> implements OnInit {

  @Input() template: TemplateRef<any>;
  @Input() tree: DynamicTree<T>;

  constructor() { }

  ngOnInit() {

  }

  onClick(val){
    this.tree.selected = val;
    console.log(this.tree.nodes[this.tree.selected].children)

  }
}
