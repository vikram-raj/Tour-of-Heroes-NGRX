import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs';
import { AppState } from './../states/app.state';
import { HeroService } from './../hero.service';
import { Hero } from './../hero';
import * as HeroActions from './../actions/hero.action';

export type Action = HeroActions.All;

@Injectable()
export class HeroEffects {
  constructor(
    private actions$: Actions,
    private heroService: HeroService,
    private store: Store<AppState>
  ){}

  @Effect() getHeroes$: Observable<Action> = this.actions$
    .ofType<HeroActions.Get>(HeroActions.GET)
    .map(action => action)
    .switchMap(action => {
      return this.heroService.getHeroes()
        .map((heroes: Hero[]) => {
          return new HeroActions.GetSuccess(heroes);
        });
    });

  @Effect() AddHero$: Observable<Action> = this.actions$
    .ofType<HeroActions.Add>(HeroActions.ADD)
    .map(action => action.payload)
    .switchMap(action => {
      return this.heroService.addHero(action)
        .map((hero) => {
          return new HeroActions.AddSuccess(hero);
        })
    })

  @Effect() deleteHero$: Observable<Action> = this.actions$
    .ofType<HeroActions.Delete>(HeroActions.DELETE)
    .map(action => action.payload)
    .switchMap(action => {
      return this.heroService.deleteHero(action)
        .map(() => {
          return new HeroActions.DeleteSuccess(action);
        });
    });
}
