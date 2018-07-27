import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';

import { <%= classify(name) %>StoreState } from '../../models';

import { StoreService } from '../store';

import { LoadAction } from './<%= dasherize(name) %>.store.actions';

@Injectable()
export class <%= classify(name) %>StoreService extends StoreService {
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
