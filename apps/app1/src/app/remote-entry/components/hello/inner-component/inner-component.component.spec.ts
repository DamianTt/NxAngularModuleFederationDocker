import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerComponentComponent } from './inner-component.component';

describe('InnerComponentComponent', () => {
  let component: InnerComponentComponent;
  let fixture: ComponentFixture<InnerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InnerComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InnerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
