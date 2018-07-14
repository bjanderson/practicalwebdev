import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';

import { <%= classify(name) %>StoreState } from '../../models';

import { AppStoreService } from '../app';

import { LoadAction } from './<%= dasherize(name) %>.store.actions';

@Injectable()
export class <%= classify(name) %>StoreService extends AppStoreService {
  <%= camelize(name) %>s = createFeatureSelector<<%= classify(name) %>StoreState>('<%= camelize(name) %>s');
  <%= camelize(name) %>sSelector = createSelector(this.<%= camelize(name) %>s, this.getProperty('<%= camelize(name) %>s'));

  constructor(public store: Store<<%= classify(name) %>StoreState>) { super(); }

  get<%= classify(name) %>s() {
    return this.store.select(this.<%= camelize(name) %>sSelector);
  }

  dispatchLoadAction(): void {
    this.dispatchAction(new LoadAction());
  }
}
