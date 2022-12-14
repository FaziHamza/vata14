import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopBookingsOutletComponent } from './desktop-bookings-outlet.component';

describe('DesktopBookingsOutletComponent', () => {
  let component: DesktopBookingsOutletComponent;
  let fixture: ComponentFixture<DesktopBookingsOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopBookingsOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopBookingsOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
