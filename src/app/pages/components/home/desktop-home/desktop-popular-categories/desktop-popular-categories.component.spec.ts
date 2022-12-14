import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopPopularCategoriesComponent } from './desktop-popular-categories.component';

describe('DesktopPopularCategoriesComponent', () => {
  let component: DesktopPopularCategoriesComponent;
  let fixture: ComponentFixture<DesktopPopularCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopPopularCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopPopularCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
