import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App2MainComponent } from './app2-main/app2-main.component';
import { RouterModule } from '@angular/router';
import { UiModule } from '@work/ui';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: App2MainComponent,
      },
    ]),
    UiModule,
  ],
  declarations: [App2MainComponent],
})
export class App2MainModule {}
