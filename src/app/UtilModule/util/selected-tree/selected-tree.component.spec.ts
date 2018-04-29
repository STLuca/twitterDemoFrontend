import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedTreeComponent } from './selected-tree.component';

xdescribe('SelectedTreeComponent', () => {
  let component: SelectedTreeComponent<string>;
  let fixture: ComponentFixture<SelectedTreeComponent<string>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
