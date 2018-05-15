import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryTrendingComponent } from './history-trending.component';

describe('HistoryTrendingComponent', () => {
  let component: HistoryTrendingComponent;
  let fixture: ComponentFixture<HistoryTrendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryTrendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
