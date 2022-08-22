import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyInputComponent } from './fancy-input.component';

describe('FancyInputComponent', () => {
  let component: FancyInputComponent;
  let fixture: ComponentFixture<FancyInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FancyInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FancyInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
