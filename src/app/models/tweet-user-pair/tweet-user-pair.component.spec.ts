import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetUserPairComponent } from './tweet-user-pair.component';

describe('TweetUserPairComponent', () => {
  let component: TweetUserPairComponent;
  let fixture: ComponentFixture<TweetUserPairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetUserPairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetUserPairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
