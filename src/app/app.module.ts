import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import {
  MatToolbarModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list/list-item/list-item.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SubListComponent } from './components/list/sub-list/sub-list.component';
import { ListService } from './services/list.service';

export const LANG = new InjectionToken<string>('language');

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ListComponent,
    ListItemComponent,
    FilterPipe,
    SubListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
  ],
  providers: [
    ListService,
    { provide: 'SecondListService', useClass: ListService },
    { provide: LANG, useValue: 'en' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
