import { <%= classify(name) %>StoreState } from '../../models';

import { <%= classify(name) %>Action, <%= classify(name) %>ActionTypes } from './<%= dasherize(name) %>.store.actions';

export function <%= camelize(name) %>Reducer(state: <%= classify(name) %>StoreState = new <%= classify(name) %>StoreState(), action: <%= classify(name) %>Action): <%= classify(name) %>StoreState {

  switch (action.type) {

    case <%= classify(name) %>ActionTypes.LOAD_SUCCESS:
      return setValue(new <%= classify(name) %>StoreState(state), action.payload);

    default:
      return state;
  }
}

function setValue(stateClone: <%= classify(name) %>StoreState, payload: any) {
  stateClone.value = payload;
  return new <%= classify(name) %>StoreState(stateClone);
}
