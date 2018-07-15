import { LoadAction } from './<%= dasherize(name) %>.store.actions';
import { <%= classify(name) %>StoreService } from './<%= dasherize(name) %>.store.service';

describe('<%= classify(name) %>StoreService', function () {
  let service: <%= classify(name) %>StoreService;
  const store: any = {select: () => undefined};

  function init() {
    service = new <%= classify(name) %>StoreService(store);
  }

  describe('constructor', function () {
    beforeEach(() => {
      init();
    });

    it('constructs', function () {
      expect(service).toBeDefined();
    });
  });

  describe('get<%= classify(name) %>s()', function () {
    beforeEach(() => {
      init();
    });

    it('has a function named get<%= classify(name) %>s', function () {
      expect(typeof service.get<%= classify(name) %>s).toEqual('function');
    });

    it('calls store.select()', function () {
      const spy = spyOn(store, 'select').and.returnValue(null);
      service.get<%= classify(name) %>s();
      expect(spy).toHaveBeenCalledWith(service.<%= camelize(name) %>sSelector);
    });
  });

  describe('dispatchLoadAction()', function () {
    beforeEach(() => {
      init();
    });

    it('has a function named dispatchLoadAction', function () {
      expect(typeof service.dispatchLoadAction).toEqual('function');
    });

    it('calls dispatchAction()', function () {
      const spy = spyOn(service, 'dispatchAction').and.returnValue(null);
      service.dispatchLoadAction();
      expect(spy).toHaveBeenCalledWith(new LoadAction());
    });
  });
});
