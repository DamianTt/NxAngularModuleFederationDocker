import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FancyInputComponent } from './components/fancy-input/fancy-input.component';
import { MaterialModule } from '@work/material';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [FancyInputComponent],
  exports: [FancyInputComponent],
})
export class UiModule {}
