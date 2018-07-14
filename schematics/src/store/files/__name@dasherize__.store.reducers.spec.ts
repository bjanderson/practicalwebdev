import { <%= classify(name) %>StoreState } from '../../models';

import { LoadSuccessAction } from './<%= dasherize(name) %>.store.actions';
import { <%= camelize(name) %>Reducer } from './<%= dasherize(name) %>.store.reducers';

describe('<%= camelize(name) %>Reducer', function () {
  it('returns the given state by default', function () {
    const state = new <%= classify(name) %>StoreState();
    const expected: any = state;
    const result: any = <%= camelize(name) %>Reducer(state, <any>{type: 'default'});
    expect(result).toEqual(expected);
  });

  it('returns the state with the payload added', function () {
    const value = '<%= camelize(name) %>';
    const state = new <%= classify(name) %>StoreState();
    const expected: any = new <%= classify(name) %>StoreState({value});
    const result: any = <%= camelize(name) %>Reducer(state, new LoadSuccessAction(value));
    expect(result).toEqual(expected);
  });
});
