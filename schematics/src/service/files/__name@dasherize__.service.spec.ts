import { EMPTY } from 'rxjs';
import { <%= classify(name) %>Service } from './<%= dasherize(name) %>.service';

const api: any = {
  get: () => EMPTY
};

let service: any;
function init() {
  service = new <%= classify(name) %>Service(api);
}

describe('<%= classify(name) %>Service', function () {
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
