import { State } from '@ngrx/store';
import { ActionReducer } from '@ngrx/store';
import * as HeroActions from './../actions/hero.action';
import { HeroState, initialState } from './../states/hero.state';
import { Hero } from './../hero';
import { InitialState } from '@ngrx/store/src/models';

export type Action = HeroActions.All;

export const HeroReducer: ActionReducer<HeroState> = (state = initialState, action: Action) => {
  switch(action.type) {
    case HeroActions.GET_SUCCESS: {
      return action.payload;
    }

    case HeroActions.GET_ERROR: {
      return state;
    }

    case HeroActions.ADD_SUCCESS: {
      return [action.payload, ...state]
    }

    case HeroActions.DELETE_SUCCESS: {
      let index = state.findIndex(h => h.id === action.payload.id);
      if (index > -1) {
        state.splice(index, 1);
      }
      return [...state];
    }

    default: {
      return state;
    }
  }
}
