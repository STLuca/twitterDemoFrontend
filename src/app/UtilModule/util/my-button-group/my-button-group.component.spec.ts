import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyButtonGroupComponent } from './my-button-group.component';

describe('MyButtonGroupComponent', () => {
  let component: MyButtonGroupComponent<number>;
  let fixture: ComponentFixture<MyButtonGroupComponent<number>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyButtonGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
