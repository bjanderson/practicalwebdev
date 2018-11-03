import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { StoreService } from '@practicalwebdev/utils';

import { <%= classify(name) %>StoreState } from '../../models';

import { LoadAction } from './<%= dasherize(name) %>.store.actions';

@Injectable()
export class <%= classify(name) %>StoreService extends StoreService {
  static readonly storeName = '<%= camelize(name) %>StoreState';
  <%= camelize(name) %>s = createFeatureSelector<<%= classify(name) %>StoreState>(<%= classify(name) %>StoreState.storeName);
  <%= camelize(name) %>sSelector = createSelector(this.<%= camelize(name) %>s, state => state.<%= camelize(name) %>s);

  constructor(public store: Store<<%= classify(name) %>StoreState>) { super(); }

  get<%= classify(name) %>s() {
    return this.store.select(this.<%= camelize(name) %>sSelector);
  }

  dispatchLoadAction(): void {
    this.dispatchAction(new LoadAction());
  }
}
