import { <%= classify(name) %>StoreState } from 'src/app/models';

import { <%= classify(name) %>Action, <%= classify(name) %>ActionTypes } from './<%= dasherize(name) %>.store.actions';

export function <%= camelize(name) %>Reducer(state: <%= classify(name) %>StoreState = new <%= classify(name) %>StoreState(), action: <%= classify(name) %>Action): <%= classify(name) %>StoreState {

  switch (action.type) {

    case <%= classify(name) %>ActionTypes.LOAD_SUCCESS:
      state.setValue(action.payload);
      return new <%= classify(name) %>StoreState(state);

    default:
      return state;
  }
}
