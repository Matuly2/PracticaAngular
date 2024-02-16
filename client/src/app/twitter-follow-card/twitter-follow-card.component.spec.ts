import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterFollowCardComponent } from './twitter-follow-card.component';

describe('TwitterFollowCardComponent', () => {
  let component: TwitterFollowCardComponent;
  let fixture: ComponentFixture<TwitterFollowCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwitterFollowCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwitterFollowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
