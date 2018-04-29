import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-button-group',
  templateUrl: './my-button-group.component.html',
  styleUrls: ['./my-button-group.component.css']
})
export class MyButtonGroupComponent<T> implements OnInit {

  @Input() items: T[];
  @Input() startIndex: number;
  @Input() displayProperty: string;
  @Output() change: EventEmitter<T> = new EventEmitter<T>();


  constructor() { }

  ngOnInit() {
    console.log(this.items);
    console.log(this.startIndex);
    console.log(this.displayProperty);
    console.log(this.items[0][this.displayProperty])
  }

  getDisplayProperty(item: T){
    return item[this.displayProperty];
  }

  onChange(newSelectedItem: T){
    console.log(newSelectedItem);
    this.change.emit(newSelectedItem);
  }
}
