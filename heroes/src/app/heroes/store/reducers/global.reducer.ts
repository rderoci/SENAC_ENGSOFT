import {champReducer, ChampState} from './hero.reducer';
import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';

export interface HeroState {
  champs: ChampState;
}

export const heroReducer: ActionReducerMap<HeroState> = {
  champs: champReducer
};

export const getHeroState = createFeatureSelector<HeroState>(
  'hero'
);
