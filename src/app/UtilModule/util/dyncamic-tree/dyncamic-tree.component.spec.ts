import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DyncamicTreeComponent } from './dyncamic-tree.component';

xdescribe('DyncamicTreeComponent', () => {
  let component: DyncamicTreeComponent<string>;
  let fixture: ComponentFixture<DyncamicTreeComponent<string>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DyncamicTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DyncamicTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
