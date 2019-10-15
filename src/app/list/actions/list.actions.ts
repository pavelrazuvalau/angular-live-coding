import { Action } from '@ngrx/store';

export enum ListActionTypes {
  Load = '[List] Load',
  LoadComplete = '[List] Load complete',
  LoadFailed = '[List] Load failed',
  RemoveItem = '[List] Remove item'
}

export class LoadAction implements Action {
  type = ListActionTypes.Load;

  constructor(public payload?: any) {}
}

export class LoadCompleteAction implements Action {
  type = ListActionTypes.LoadComplete;

  constructor(public payload: any) {}
}

export class LoadFailedAction implements Action {
  type = ListActionTypes.LoadFailed;

  constructor(public payload: string) {}
}

export class RemoveItemAction implements Action {
  type = ListActionTypes.RemoveItem;

  constructor(public payload: any) {}
}

export type ListAction =
  | LoadAction
  | LoadCompleteAction
  | LoadFailedAction
  | RemoveItemAction;
