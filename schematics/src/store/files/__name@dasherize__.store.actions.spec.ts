import {
  <%= classify(name) %>ActionTypes,

  LoadAction,
  LoadFailAction,
  LoadSuccessAction
} from './<%= dasherize(name) %>.store.actions';

describe('<%= classify(name) %>Actions', () => {
  describe('<%= classify(name) %>ActionTypes', () => {
    it('LOAD', () => {
      expect(<%= classify(name) %>ActionTypes.LOAD).toEqual('[<%= titleify(name) %>] Load');
    });

    it('LOAD_FAIL', () => {
      expect(<%= classify(name) %>ActionTypes.LOAD_FAIL).toEqual('[<%= titleify(name) %>] Load Fail');
    });

    it('LOAD_SUCCESS', () => {
      expect(<%= classify(name) %>ActionTypes.LOAD_SUCCESS).toEqual('[<%= titleify(name) %>] Load Success');
    });
  });

  describe('LoadAction', () => {
    it('sets the correct action.type', () => {
      const expected: any = <%= classify(name) %>ActionTypes.LOAD;
      const result: any = new LoadAction().type;
      expect(result).toEqual(expected);
    });
  });

  describe('LoadFailAction', () => {
    it('sets the correct action.type', () => {
      const payload: any = 'test-payload';
      const expected: any = <%= classify(name) %>ActionTypes.LOAD_FAIL;
      const result: any = new LoadFailAction(payload).type;
      expect(result).toEqual(expected);
    });

    it('sets action.payload to the given payload', () => {
      const payload: any = 'test-payload';
      const expected: any = payload;
      const result: any = new LoadFailAction(payload).payload;
      expect(result).toEqual(expected);
    });
  });

  describe('LoadSuccessAction', () => {
    it('sets the correct action.type', () => {
      const payload: any = 'test-payload';
      const expected: any = <%= classify(name) %>ActionTypes.LOAD_SUCCESS;
      const result: any = new LoadSuccessAction(payload).type;
      expect(result).toEqual(expected);
    });

    it('sets action.payload to the given payload', () => {
      const payload: any = 'test-payload';
      const expected: any = payload;
      const result: any = new LoadSuccessAction(payload).payload;
      expect(result).toEqual(expected);
    });
  });
});
