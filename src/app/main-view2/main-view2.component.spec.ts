import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainView2Component } from './main-view2.component';

describe('MainView2Component', () => {
  let component: MainView2Component;
  let fixture: ComponentFixture<MainView2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainView2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainView2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
