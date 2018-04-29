import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTreeComponent } from './my-tree.component';

xdescribe('MyTreeComponent', () => {
  let component: MyTreeComponent<string>;
  let fixture: ComponentFixture<MyTreeComponent<string>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
