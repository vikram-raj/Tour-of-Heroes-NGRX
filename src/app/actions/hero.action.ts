import { Action } from '@ngrx/store';

import { Hero } from './../hero';

export const GET = '[hero] Get';
export const GET_SUCCESS = '[hero] GetSuccess';
export const GET_ERROR = '[hero] GetError';
export const ADD = '[hero] Add';
export const ADD_SUCCESS = '[hero] AddSuccess';
export const ADD_ERROR = '[hero] AddError';
export const DELETE = '[hero] Delete';
export const DELETE_SUCCESS = '[hero] DeleteSuccess';
export const DELETE_ERROR = '[hero] DeleteError';

export class Get implements Action {
  readonly type = GET;
}

export class GetSuccess implements Action {
  payload: Hero[];
  constructor(payload: Hero[]) {
    this.payload = payload;
  };
  readonly type = GET_SUCCESS;
}

export class GetError implements Action {
  readonly type = GET_ERROR;
}

export class Add implements Action {
  payload: Hero;
  constructor(payload: Hero) {
    this.payload = payload;
  }
  readonly type = ADD;
}

export class AddSuccess implements Action {
  payload: Hero;
  constructor(payload: Hero) {
    this.payload = payload;
  }
  readonly type = ADD_SUCCESS;
}

export class AddError implements Action {
  readonly type = ADD_ERROR;
}

export class Delete implements Action {
  payload: Hero;
  constructor(payload: Hero) {
    this.payload = payload;
  }
  readonly type = DELETE;
}

export class DeleteSuccess implements Action {
  payload: Hero;
  constructor(payload: Hero) {
    this.payload = payload;
  }
  readonly type = DELETE_SUCCESS;
}

export class DeleteError implements Action {
  readonly type = DELETE_ERROR;
}

export type All
  = Get
  | GetSuccess
  | GetError
  | Add
  | AddSuccess
  | AddError
  | Delete
  | DeleteSuccess
  | DeleteError
