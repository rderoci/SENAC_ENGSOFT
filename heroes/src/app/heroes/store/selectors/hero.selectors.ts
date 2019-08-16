import {createSelector} from '@ngrx/store';
import {getHeroState} from '../reducers/global.reducer';
import {heroAdapter} from '../reducers/hero.reducer';

export const getChampState = createSelector(
  getHeroState,
  state => state.champs
);

export const getAllHeroes = createSelector(
  getChampState,
  state => heroAdapter.getSelectors().selectAll(state)
);

export const getSelectedHero = createSelector(
  getChampState,
  state => state.champ
);
