import {
  <%= classify(name) %>ActionTypes,

  LoadAction,
  LoadFailAction,
  LoadSuccessAction
} from './<%= dasherize(name) %>.store.actions';

describe('<%= classify(name) %>Actions', function () {
  describe('<%= classify(name) %>ActionTypes', function () {
    it('has an action named LOAD', function () {
      expect(<%= classify(name) %>ActionTypes.LOAD).toEqual('[<%= titleify(name) %>] Load');
    });

    it('has an action named LOAD_FAIL', function () {
      expect(<%= classify(name) %>ActionTypes.LOAD_FAIL).toEqual('[<%= titleify(name) %>] Load Fail');
    });

    it('has an action named LOAD_SUCCESS', function () {
      expect(<%= classify(name) %>ActionTypes.LOAD_SUCCESS).toEqual('[<%= titleify(name) %>] Load Success');
    });
  });

  describe('LoadAction()', function () {
    it('sets action.type to LOAD', function () {
      const expected: any = '[<%= titleify(name) %>] Load';
      const result: any = new LoadAction().type;
      expect(result).toEqual(expected);
    });
  });

  describe('LoadFailAction()', function () {
    it('sets action.type to LOAD_FAIL', function () {
      const payload: any = 'test-payload';
      const expected: any = '[<%= titleify(name) %>] Load Fail';
      const result: any = new LoadFailAction(payload).type;
      expect(result).toEqual(expected);
    });

    it('sets action.payload to the given payload', function () {
      const payload: any = 'test-payload';
      const expected: any = payload;
      const result: any = new LoadFailAction(payload).payload;
      expect(result).toEqual(expected);
    });
  });

  describe('LoadSuccessAction()', function () {
    it('sets action.type to LOAD_SUCCESS', function () {
      const payload: any = 'test-payload';
      const expected: any = '[<%= titleify(name) %>] Load Success';
      const result: any = new LoadSuccessAction(payload).type;
      expect(result).toEqual(expected);
    });

    it('sets action.payload to the given payload', function () {
      const payload: any = 'test-payload';
      const expected: any = payload;
      const result: any = new LoadSuccessAction(payload).payload;
      expect(result).toEqual(expected);
    });
  });
});
