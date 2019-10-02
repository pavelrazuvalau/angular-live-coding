import { Component, Input, OnInit, Inject } from '@angular/core';
import { ListService } from 'src/app/list/services/list.service';
import { Router, ActivatedRoute } from '@angular/router';
// import { LANG } from 'src/app/app.module';

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
    private router: Router,
    private route: ActivatedRoute
    // @Inject(LANG) language: string
  ) {
    // console.log(language);
  }

  public ngOnInit(): void {
    this.items = this.listService.items;
  }

  public editItem(item: any) {
    this.router.navigate(['./edit', item.id], { relativeTo: this.route });
  }

  public removeItem(args) {
    this.listService.removeItem(args);
  }
}
