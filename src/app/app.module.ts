import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

// export const LANG = new InjectionToken<string>('language');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', loadChildren: './list/list.module#ListModule' },
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
