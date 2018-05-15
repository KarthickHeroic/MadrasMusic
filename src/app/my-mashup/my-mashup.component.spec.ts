import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMashupComponent } from './my-mashup.component';

describe('MyMashupComponent', () => {
  let component: MyMashupComponent;
  let fixture: ComponentFixture<MyMashupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMashupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMashupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
