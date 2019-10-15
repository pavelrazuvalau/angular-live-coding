import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { ListService } from '../services/list.service';
import { ListActionTypes, LoadCompleteAction } from '../actions/list.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class ListEffects {
  @Effect()
  public load$ = this.actions$.pipe(
    ofType(ListActionTypes.Load),
    switchMap(
      () => this.listService.getItems().pipe(
        map((items) => new LoadCompleteAction(items)),
        catchError((error) => EMPTY)
      )
    ),
  );

  constructor(private actions$: Actions, private listService: ListService) {}
}
