import { Component, OnInit, Input } from '@angular/core';
import {Observable} from 'rxjs';
import {Action, select, Store} from '@ngrx/store';
import {ChampState} from '../../store/reducers/hero.reducer';
import {getSelectedHero} from '../../store/selectors/hero.selectors';
import {Hero} from '../../model/hero.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent  implements OnInit {
  hero$: Observable<Hero>;

  constructor(private store: Store<ChampState>) {}

  ngOnInit() {
    this.hero$ = this.store.pipe(select(getSelectedHero));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
