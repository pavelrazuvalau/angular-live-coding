import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss']
})
export class TasksPageComponent {
  public searchText: string;

  public onSearch(criterion: string) {
    this.searchText = criterion;

    console.log(this.searchText);
  }
}
