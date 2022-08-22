import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ShellInnerComponent } from './shell-inner/shell-inner.component';
import { MaterialModule } from '@work/material';

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
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
