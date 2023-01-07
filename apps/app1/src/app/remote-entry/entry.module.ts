import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HelloComponent } from './components/hello/hello.component';
import { InnerComponentComponent } from './components/hello/inner-component/inner-component.component';

@NgModule({
  declarations: [HelloComponent, InnerComponentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HelloComponent,
      },
    ]),
  ],
  providers: [],
  exports: [],
})
export class RemoteEntryModule {}
