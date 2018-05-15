import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationChannelsComponent } from './station-channels.component';

describe('StationChannelsComponent', () => {
  let component: StationChannelsComponent;
  let fixture: ComponentFixture<StationChannelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationChannelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
