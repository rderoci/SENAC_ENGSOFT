import {Action, createReducer, on} from '@ngrx/store';
import {createHero, deleteHero, selectHero, unselectHero, updateHeroList, updateHero} from '../actions/hero.actions';
import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {Hero} from '../../model/hero.model';


export const heroAdapter = createEntityAdapter<Hero>({
  sortComparer: (a: Hero, b: Hero) => a.name.localeCompare(b.name)
});

export interface ChampState extends EntityState<Hero> {
  champ?: Hero;
}

const initialState = heroAdapter.getInitialState();

const reducer = createReducer(
  initialState,
  on(updateHeroList, (state, {champs: champs}) => heroAdapter.addAll(champs, state)),
  on(selectHero, (state, {champ: champ}) => ({...state, champ: champ})),
  on(unselectHero, updateHero, (state: ChampState) => {
    const {champ: champ,  ...rest} = state;
    return rest;
  }),
  on(createHero, (state, {champ: champ}) => heroAdapter.addOne(champ, state)),
  on(deleteHero, (state, {id}) => heroAdapter.removeOne(id, state)),
);

export function champReducer(state: ChampState, action: Action) {
  return reducer(state, action);
}
