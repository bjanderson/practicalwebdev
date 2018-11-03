import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store, select } from '@ngrx/store';
import { StoreService } from '@practicalwebdev/utils';

import { <%= classify(name) %>StoreState } from 'src/app/models';

import { LoadAction } from './<%= dasherize(name) %>.store.actions';

@Injectable()
export class <%= classify(name) %>StoreService extends StoreService {
  static readonly storeName = '<%= camelize(name) %>StoreState';
  <%= camelize(name) %>StoreState = createFeatureSelector<<%= classify(name) %>StoreState>(<%= classify(name) %>StoreService.storeName);
  valueSelector = createSelector(this.<%= camelize(name) %>StoreState, state => state.value);

  constructor(public store: Store<<%= classify(name) %>StoreState>) { super(); }

  getValue() {
    return this.store.pipe(select(this.valueSelector));
  }

  dispatchLoadAction(): void {
    this.dispatchAction(new LoadAction());
  }
}
