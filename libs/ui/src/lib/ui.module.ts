import { NgModule } from '@angular/core';
import { FancyInputComponent } from './components/fancy-input/fancy-input.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [MatFormFieldModule, MatInputModule],
  declarations: [FancyInputComponent],
  exports: [FancyInputComponent],
})
export class UiModule {}
