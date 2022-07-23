import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from '../nx-welcome.component';

@NgModule({
  declarations: [RemoteEntryComponent, NxWelcomeComponent],
  imports: [CommonModule],
  providers: [],
  exports: [RemoteEntryComponent],
})
export class RemoteEntryModule {}
