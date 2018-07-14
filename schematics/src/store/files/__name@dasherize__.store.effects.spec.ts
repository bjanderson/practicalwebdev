import { EMPTY, of, throwError } from 'rxjs';
import { take } from 'rxjs/operators';

import {
  LoadSuccessAction,
  LoadFailAction
} from './<%= dasherize(name) %>.store.actions';
import { <%= classify(name) %>Effects } from './<%= dasherize(name) %>.store.effects';

describe('<%= classify(name) %>Effects', function () {
  let effects: any;
  const actions$: any = EMPTY;
  const <%= camelize(name) %>Service: any = {
    get: () => EMPTY
  };

  function init() {
    effects = new <%= classify(name) %>Effects(actions$, <%= camelize(name) %>Service);
  }

  describe('constructor', function () {
    beforeEach(() => {
      init();
    });

    it('has a function named ', function () {
      expect(effects).toBeDefined();
    });
  });

  describe('load<%= classify(name) %>()', function() {
    beforeEach(() => {
      init();
    });

    it('is a function', function() {
       expect(typeof effects.load<%= classify(name) %>).toEqual('function');
    });

    it('calls <%= camelize(name) %>Service.get()', function() {
      const spy = spyOn(<%= camelize(name) %>Service, 'get').and.callThrough();
      effects.load<%= classify(name) %>();
      expect(spy).toHaveBeenCalled();
    });

    it('it returns an instance of LoadSuccessAction', function(done) {
      effects.<%= camelize(name) %>Service.get = () => of({});
      effects.load<%= classify(name) %>().pipe(take(1)).subscribe(result => {
        expect(result instanceof LoadSuccessAction).toEqual(true);
        done();
      });
    });

    it('it returns an instance of LoadFailAction', function(done) {
      effects.<%= camelize(name) %>Service.get = () => throwError({});
      effects.load<%= classify(name) %>().pipe(take(1)).subscribe(result => {
        expect(result instanceof LoadFailAction).toEqual(true);
        done();
      });
    });
  });
});
