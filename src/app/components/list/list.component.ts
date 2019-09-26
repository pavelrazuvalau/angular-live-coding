import { Component, Input, OnInit, Inject } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { LANG } from 'src/app/app.module';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() public searchText: string;
  public items: any[];

  constructor(
    private listService: ListService,
    @Inject(LANG) language: string
  ) {
    console.log(language);
  }

  public ngOnInit(): void {
    this.items = this.listService.items;
  }

  public removeItem(args) {
    this.listService.removeItem(args);
  }
}
