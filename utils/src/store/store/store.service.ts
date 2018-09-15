import { Action, Store } from '@ngrx/store';

export abstract class StoreService {
  store: Store<any>;

  dispatchAction(action: Action) {
    return this.store.dispatch(action);
  }

  getProperty(prop: string) {
    return (obj: any = {}) => {
      return obj[prop];
    };
  }
}
