import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {updateHeroList, updateHero, deleteHero, createHero} from '../actions/hero.actions';
import {catchError, concatMap, exhaustMap, map} from 'rxjs/operators';
import {from, of} from 'rxjs';
import {navigateTo} from '../../../store/actions/app.actions';
import {showSnackBar} from '../../../core/store/actions/core.actions';
import {Hero} from '../../model/hero.model';

@Injectable()
export class HeroEffects {
  constructor(private actions: Actions, private firestore: AngularFirestore) {}

  updateHeroesList$ = createEffect(() =>
    this.firestore.collection<Hero>('champs').valueChanges().pipe(
      map(heroes => updateHeroList({champs: heroes})),
  ));

  updateHero$ = createEffect(() => this.actions.pipe(
      ofType(updateHero),
      exhaustMap((action) =>
        from(this.firestore.doc(`champs/${action.champ.id}`).set(action.champ)).pipe(
          concatMap(() => from([
            navigateTo({commands: ['core', 'layout', 'heroes']}),
            showSnackBar({message: `${action.champ.name} updated successfully!`, config: {}})
          ])),
          catchError(() => of(showSnackBar({
            message: 'Failed! :(',
            config: {duration: 5000}
          })))
        )
      ),
    ));

    createHero$ = createEffect(() => this.actions.pipe(
      ofType(createHero),
      exhaustMap((action) => {
        const id = this.firestore.createId();
        return from(this.firestore.doc(`champs/${id}`).set({...action.champ, id})).pipe(
          concatMap(() => from([
            navigateTo({commands: ['core', 'layout', 'heroes']}),
            showSnackBar({message: `${action.champ.name} updated successfully! :)`, config: {}})
          ])),
          catchError(() => of(showSnackBar({
            message: 'Failed! :(',
            config: {duration: 5000}
          })))
        );
        }),
    ));

    deleteHero$ = createEffect(() => this.actions.pipe(
      ofType(deleteHero),
      exhaustMap((action) =>
        from(this.firestore.doc(`champs/${action.id}`).delete()).pipe(
          concatMap(() => from([
            navigateTo({commands: ['core', 'layout', 'heroes']}),
            showSnackBar({message: `Removed Successfully! :)`, config: {}})
          ])),
          catchError(() => of(showSnackBar({
            message: 'Failed! :(',
            config: {duration: 5000}
          })))
        )
      ),
    ));
}
