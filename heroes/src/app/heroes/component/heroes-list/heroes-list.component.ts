import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Action} from '@ngrx/store';
import {deleteHero, selectHero} from '../../store/actions/hero.actions';
import {Hero} from '../../model/hero.model';


@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {

  constructor() { }

  @Input()
  heroes: Hero[];

  @Output()
  actionEmmiter = new EventEmitter<Action>();

  ngOnInit() {
    console.log(this.heroes);
  }

  select(hero: Hero) {
    this.actionEmmiter.emit(selectHero({champ: hero}));
  }

  delete(hero: Hero) {
    this.actionEmmiter.emit(deleteHero({id: hero.id}));
  }
}
