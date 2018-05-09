import { HeroState } from './hero.state';

export interface AppState {
  heroPage: {
    heroes: HeroState
  }
}
