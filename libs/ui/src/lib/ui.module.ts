import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FancyInputComponent } from './components/fancy-input/fancy-input.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FancyInputComponent],
  exports: [FancyInputComponent],
})
export class UiModule {}
