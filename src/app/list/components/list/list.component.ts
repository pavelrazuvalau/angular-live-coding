import { getLists, getIsLoading } from './../../reducers/list.reducer';
import { Component, Input, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ListState } from '../../reducers/list.reducer';
import { LoadAction, RemoveItemAction } from '../../actions/list.actions';
// import { LANG } from 'src/app/app.module';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() public searchText: string;
  public items$: Observable<any>;
  public isLoading$: Observable<boolean>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<ListState>
  ) {
  }

  public ngOnInit(): void {
    this.items$ = this.store.pipe(select(getLists));
    this.isLoading$ = this.store.pipe(select(getIsLoading));
    this.store.dispatch(new LoadAction());
  }

  public editItem(item: any) {
    this.router.navigate(['./edit', item.id], { relativeTo: this.route });
  }

  public removeItem(args) {
    this.store.dispatch(new RemoveItemAction(args));
  }
}
