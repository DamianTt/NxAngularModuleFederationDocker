import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellInnerComponent } from './shell-inner.component';

describe('ShellInnerComponent', () => {
  let component: ShellInnerComponent;
  let fixture: ComponentFixture<ShellInnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShellInnerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShellInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
