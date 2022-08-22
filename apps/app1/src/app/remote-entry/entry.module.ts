import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HelloComponent } from './components/hello/hello.component';
import { UiModule } from '@work/ui';

@NgModule({
  declarations: [HelloComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HelloComponent,
      },
    ]),
    UiModule,
  ],
  providers: [],
  exports: [],
})
export class RemoteEntryModule {}
