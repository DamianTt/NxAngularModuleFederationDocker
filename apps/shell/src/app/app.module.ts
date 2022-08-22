import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ShellInnerComponent } from './shell-inner/shell-inner.component';

@NgModule({
  declarations: [AppComponent, ShellInnerComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'inner',
        component: ShellInnerComponent,
      },
      {
        path: 'app1',
        loadChildren: () =>
          import('app1/Module').then((m) => m.RemoteEntryModule),
      },
      {
        path: 'app2',
        loadChildren: () =>
          import('app2/Module').then((m) => m.RemoteEntryModule),
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
