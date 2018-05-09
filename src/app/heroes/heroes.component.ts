import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Hero } from '../hero';
import { AppState } from './../states/app.state';
import * as HeroActions from './../actions/hero.action';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Observable<Hero[]>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.dispatch(new HeroActions.Get());
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = this.store.select('heroPage').select('heroes');
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.store.dispatch(new HeroActions.Add({name} as Hero));
  }

  delete(hero: Hero): void {
    this.store.dispatch(new HeroActions.Delete(hero));
  }

}
