import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bitcoin7Component } from './bitcoin7.component';

describe('Bitcoin7Component', () => {
  let component: Bitcoin7Component;
  let fixture: ComponentFixture<Bitcoin7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bitcoin7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bitcoin7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
