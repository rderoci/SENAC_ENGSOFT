import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'core'},
  {path: 'hero', pathMatch: 'full', redirectTo: 'core/layout/heroes/hero'},
  {path: 'heroes', pathMatch: 'full', redirectTo: 'core/layout/heroes/heroes'},
  // {path: 'core', loadChildren: () => CoreModule}
  {path: 'core', loadChildren: () => import('./core/core.module').then(module => module.CoreModule)}
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
