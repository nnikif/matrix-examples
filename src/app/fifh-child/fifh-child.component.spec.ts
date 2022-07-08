import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifhChildComponent } from './fifh-child.component';

describe('FifhChildComponent', () => {
  let component: FifhChildComponent;
  let fixture: ComponentFixture<FifhChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifhChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FifhChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
