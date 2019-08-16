import {createAction, props} from '@ngrx/store';
import {MatSnackBarConfig} from '@angular/material';

export const showSnackBar = createAction(
  '[App] Show snack bar',
  props<{ message, config: MatSnackBarConfig }>()
);
