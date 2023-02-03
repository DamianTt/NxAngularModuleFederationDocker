import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HelloComponent } from './components/hello/hello.component';
import { InnerComponentComponent } from './components/hello/inner-component/inner-component.component';
import { UiModule } from '@work/ui';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

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
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    UiModule,
  ],
  providers: [],
  exports: [],
})
export class RemoteEntryModule {}
