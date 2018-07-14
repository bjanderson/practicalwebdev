import { <%= classify(name) %>StoreState } from '../../models';

import { <%= classify(name) %>Action, <%= classify(name) %>ActionTypes } from './<%= dasherize(name) %>.store.actions';

export function <%= camelize(name) %>Reducer(state: <%= classify(name) %>StoreState = new <%= classify(name) %>StoreState(), action: <%= classify(name) %>Action): <%= classify(name) %>StoreState {

  switch (action.type) {

    case <%= classify(name) %>ActionTypes.LOAD_SUCCESS:
      return loadSuccess(state, action.payload);

    default:
      return state;
  }
}

function loadSuccess(state: <%= classify(name) %>StoreState, payload: any) {
  state.value = payload;
  return new <%= classify(name) %>StoreState(state);
}
