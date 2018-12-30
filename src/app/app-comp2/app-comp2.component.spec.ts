import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComp2Component } from './app-comp2.component';

describe('AppComp2Component', () => {
  let component: AppComp2Component;
  let fixture: ComponentFixture<AppComp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
