import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App2MainComponent } from './app2-main.component';

describe('App2MainComponent', () => {
  let component: App2MainComponent;
  let fixture: ComponentFixture<App2MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [App2MainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(App2MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
