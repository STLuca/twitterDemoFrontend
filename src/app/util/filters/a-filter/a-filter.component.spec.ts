import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AFilterComponent } from './a-filter.component';

xdescribe('AFilterComponent', () => {
  let component: AFilterComponent<string>;
  let fixture: ComponentFixture<AFilterComponent<string>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
