import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopDashboardHelpComponent } from './desktop-dashboard-help.component';

describe('DesktopDashboardHelpComponent', () => {
  let component: DesktopDashboardHelpComponent;
  let fixture: ComponentFixture<DesktopDashboardHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopDashboardHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopDashboardHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
