import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { <%= classify(name) %>Service } from 'src/app/services';

import {
  <%= classify(name) %>Action,
  <%= classify(name) %>ActionTypes,
  LoadSuccessAction,
  LoadFailAction
} from './<%= dasherize(name) %>.store.actions';

@Injectable()
export class <%= classify(name) %>Effects {
  @Effect()
  load<%= classify(name) %>$: Observable<<%= classify(name) %>Action> = this.actions$.pipe(
    ofType(<%= classify(name) %>ActionTypes.LOAD),
    map((action: <%= classify(name) %>Action) => action.payload),
    switchMap(this.load<%= classify(name) %>.bind(this)));

  constructor(
    private actions$: Actions,
    private <%= camelize(name) %>Service: <%= classify(name) %>Service
  ) {}

  private load<%= classify(name) %>(): Observable<<%= classify(name) %>Action> {
    return this.<%= camelize(name) %>Service.get().pipe(
      map((value: any) => new LoadSuccessAction(value)),
      catchError(error => of(new LoadFailAction(error))));
  }
}
