import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopForgotPasswordComponent } from './desktop-forgot-password.component';

describe('DesktopForgotPasswordComponent', () => {
  let component: DesktopForgotPasswordComponent;
  let fixture: ComponentFixture<DesktopForgotPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopForgotPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
