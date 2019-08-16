import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroesComponent} from './containers/heroes/heroes.component';
import {HeroComponent} from './containers/hero/hero.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'heroes'},
  {path: 'heroes', component: HeroesComponent},
  {path: 'hero', component: HeroComponent},
  {path: 'hero/:id', component: HeroComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
