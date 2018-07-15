import { EMPTY } from 'rxjs';
import { <%= classify(name) %>Service } from './<%= dasherize(name) %>.service';

describe('<%= classify(name) %>Service', function () {
  let service: <%= classify(name) %>Service;
  const api: any = {
    get: () => EMPTY
  };

  function init() {
    service = new <%= classify(name) %>Service(api);
  }

  describe('constructor', function () {
    beforeEach(() => {
      init();
    });

    it('constructs', function () {
      expect(service).toBeDefined();
    });
  });

  describe('get', function () {
    beforeEach(() => {
      init();
    });

    it('has a function named get', function () {
      expect(typeof service.get).toEqual('function');
    });

    it('calls api.get()', function () {
      const spy = spyOn(api, 'get').and.callThrough();
      service.get();
      expect(spy).toHaveBeenCalled();
    });
  });
});
