import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent<T> implements OnInit {

  @Input() template: TemplateRef<any>;
  @Input() list: T[];

  constructor() { }

  ngOnInit() {
  }

}
