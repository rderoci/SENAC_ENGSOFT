import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesListComponent } from './component/heroes-list/heroes-list.component';
import { HeroesDetailComponent } from './component/heroes-detail/heroes-detail.component';
import { HeroesComponent } from './containers/heroes/heroes.component';
import { HeroComponent } from './containers/hero/hero.component';
import { SharedModule } from '../core/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { HeroEffects } from './store/effects/hero.effects';
import { EffectsModule } from '@ngrx/effects';
import {heroReducer} from './store/reducers/global.reducer';



@NgModule({
  declarations: [HeroesListComponent, HeroesDetailComponent, HeroesComponent, HeroComponent],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    SharedModule,
    FontAwesomeModule,
    StoreModule.forFeature('hero', heroReducer),
    ReactiveFormsModule,
    EffectsModule.forFeature([HeroEffects]),
  ]
})
export class HeroesModule { }
