import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopPublicProfileMainComponent } from './desktop-public-profile-main.component';

describe('DesktopPublicProfileMainComponent', () => {
  let component: DesktopPublicProfileMainComponent;
  let fixture: ComponentFixture<DesktopPublicProfileMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopPublicProfileMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopPublicProfileMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
