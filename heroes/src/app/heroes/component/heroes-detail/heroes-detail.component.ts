import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Action } from '@ngrx/store';
import {unselectHero, updateHero, deleteHero, createHero} from '../../store/actions/hero.actions';
import {Hero} from '../../model/hero.model';
import {FormBuilder, Validators} from "@angular/forms";


@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.scss']
})
export class HeroesDetailComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  // addOnBlur = true;
  // readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  // eventoForm = this.fb.group( {
  //   id: [''],
  //   name: [''],
  //   power: [],
  //   dexterity: [],
  //   magic: [],
  //   image: ['']
  // });

  eventoForm = this.fb.group( {
    id: [''],
    name: ['', [Validators.required, Validators.maxLength(20)]],
    power: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
    dexterity: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
    magic: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
    image: ['']
  });

  champ: Hero;

  @Input('hero')
  set hero(hero: Hero) {
    if (hero) {
      this.eventoForm.patchValue(hero);
      this.champ = JSON.parse(JSON.stringify(hero));
    }
  }

  get hero() {
    return this.champ;
  }

  @Output()
  actionEmmiter = new EventEmitter<Action>();

  unselect() {
    this.actionEmmiter.emit(unselectHero());
  }

  save() {
    if (this.hero.id && this.hero.id !== '') {
      this.actionEmmiter.emit(updateHero({champ: this.eventoForm.value}));
    } else {
      this.actionEmmiter.emit(createHero({champ: this.eventoForm.value}));
    }
  }

  delete() {
    this.actionEmmiter.emit(deleteHero({id: this.eventoForm.value.id}));
  }

  ngOnInit() {}
}
