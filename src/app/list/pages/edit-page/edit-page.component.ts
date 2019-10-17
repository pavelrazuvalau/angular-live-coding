import { getItemById } from './../../reducers/list.reducer';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListState } from '../../reducers/list.reducer';
import { Store, select } from '@ngrx/store';
import { EditItemAction } from '../../actions/list.actions';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent {
  public item$ = this.store.pipe(
    select(getItemById, { id: +this.route.snapshot.params.id })
  );
  constructor(private route: ActivatedRoute, private store: Store<ListState>, private router: Router) { }

  public editItem(item: any) {
    this.store.dispatch(new EditItemAction(item));
    this.router.navigate(['/list']);
  }
}
