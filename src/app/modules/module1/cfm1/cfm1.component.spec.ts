import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cfm1Component } from './cfm1.component';

describe('Cfm1Component', () => {
  let component: Cfm1Component;
  let fixture: ComponentFixture<Cfm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cfm1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cfm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
