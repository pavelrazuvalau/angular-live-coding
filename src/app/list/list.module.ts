import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule
} from '@angular/material';

import { ListRoutingModule } from './list-routing.module';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list/list-item/list-item.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SubListComponent } from './components/list/sub-list/sub-list.component';
import { ListService } from './services/list.service';
import { FormsModule } from '@angular/forms';
import { EditPageComponent } from './pages/edit-page/edit-page.component';


@NgModule({
  declarations: [
    TasksPageComponent,
    SearchBarComponent,
    ListComponent,
    ListItemComponent,
    FilterPipe,
    SubListComponent,
    EditPageComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule
  ],
  providers: [
    ListService
  ]
})
export class ListModule { }
