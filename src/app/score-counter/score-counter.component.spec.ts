import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreCounterComponent } from './score-counter.component';

describe('ScoreCounterComponent', () => {
  let component: ScoreCounterComponent;
  let fixture: ComponentFixture<ScoreCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
