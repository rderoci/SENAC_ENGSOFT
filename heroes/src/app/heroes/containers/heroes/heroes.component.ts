import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ChampState} from '../../store/reducers/hero.reducer';
import {Action, select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {getAllHeroes} from '../../store/selectors/hero.selectors';
import { selectHero } from '../../store/actions/hero.actions';
import {Hero} from '../../model/hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes$: Observable<Hero []>;

  constructor(private store: Store<ChampState>) { }

  ngOnInit(): void {
    this.heroes$ = this.store.pipe(select(getAllHeroes));
  }

  createHero() {
    this.dispatch(selectHero({champ: new Hero()}));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
