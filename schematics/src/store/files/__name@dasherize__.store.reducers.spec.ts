import { <%= classify(name) %>StoreState } from 'src/app/models';

import { LoadSuccessAction } from './<%= dasherize(name) %>.store.actions';
import { <%= camelize(name) %>Reducer } from './<%= dasherize(name) %>.store.reducers';

describe('<%= camelize(name) %>Reducer', () => {
  it('returns the given state by default', () => {
    const state = new <%= classify(name) %>StoreState();
    const expected: any = state;
    const result: any = <%= camelize(name) %>Reducer(state, <any>{type: 'default'});
    expect(result).toEqual(expected);
  });

  describe('LOAD_SUCCESS', () => {
    it('calls state.setValue', () => {
      const value = 'test value';
      const state = new <%= classify(name) %>StoreState();
      const spy = spyOn(state, 'setValue').and.callThrough();
      <%= camelize(name) %>Reducer(state, new LoadSuccessAction(value));
      expect(spy).toHaveBeenCalled();
    });
  });
});
