import { NgModule } from '@angular/core';
import { FancyInputComponent } from './components/fancy-input/fancy-input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [MatFormFieldModule, MatInputModule],
  declarations: [FancyInputComponent],
  exports: [FancyInputComponent],
})
export class UiModule {}
