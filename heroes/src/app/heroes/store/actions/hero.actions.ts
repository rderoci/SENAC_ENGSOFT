import {createAction, props} from '@ngrx/store';
import {Hero} from '../../model/hero.model';


export const updateHeroList = createAction(
  '[Heroes] Update hero list',
  props<{champs: Hero[]}>(),
);

export const selectHero = createAction(
  '[Heroes] Select hero',
  props<{champ: Hero}>()
);

export const unselectHero = createAction(
  '[Heroes] Unselect hero'
);

export const createHero = createAction(
  '[Heroes] Create hero',
  props<{champ: Hero}>()
);

export const updateHero = createAction(
  '[Heroes] Update hero',
  props<{champ: Hero}>()
);

export const deleteHero = createAction(
  '[Heroes] Delete hero',
  props<{id: string}>()
);

