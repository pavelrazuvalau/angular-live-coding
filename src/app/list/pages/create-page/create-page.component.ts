import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ListState } from '../../reducers/list.reducer';
import { CreateItemAction } from '../../actions/list.actions';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  constructor(private store: Store<ListState>, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  public saveItem(value: any) {
    this.store.dispatch(new CreateItemAction(value));
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
