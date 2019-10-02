import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';


const routes: Routes = [
  { path: '', component: TasksPageComponent },
  { path: 'edit/:id', component: EditPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
