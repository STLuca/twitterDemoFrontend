import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { InfinitelistComponent } from './infinitelist.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core/src/debug/debug_node';

describe('Infinitelist2Component', () => {
  let component: InfinitelistComponent;
  let fixture: ComponentFixture<InfinitelistComponent>;
  let btnEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfinitelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfinitelistComponent);
    component = fixture.componentInstance;
    btnEl = fixture.debugElement.query(By.css('button'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit on click', fakeAsync( () =>{
    
    spyOn(component.nextPage, 'emit');
    btnEl.nativeElement.dispatchEvent(new Event('click'));
    tick(100);
    expect(component.nextPage.emit).toHaveBeenCalled();

  }))

  it('should emit once on double click', fakeAsync( () =>{
    
    spyOn(component.nextPage, 'emit');
    btnEl.nativeElement.dispatchEvent(new Event('click'));
    btnEl.nativeElement.dispatchEvent(new Event('click'));
    tick(100);
    expect(component.nextPage.emit).toHaveBeenCalledTimes(1);

  }))

});
