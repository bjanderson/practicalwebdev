import { LoadAction } from './<%= dasherize(name) %>.store.actions';
import { <%= classify(name) %>StoreService } from './<%= dasherize(name) %>.store.service';

const store: any = {select: () => undefined};

let service: any;
function init() {
  service = new <%= classify(name) %>StoreService(store);
}

describe('<%= classify(name) %>StoreService', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    });

    it('constructs', () => {
      expect(service).toBeDefined();
    });
  });

  describe('get<%= classify(name) %>s()', () => {
    beforeEach(() => {
      init();
    });

    it('has a function named get<%= classify(name) %>s', () => {
      expect(typeof service.get<%= classify(name) %>s).toEqual('function');
    });

    it('calls store.select()', () => {
      const spy = spyOn(store, 'select').and.returnValue(null);
      service.get<%= classify(name) %>s();
      expect(spy).toHaveBeenCalledWith(service.<%= camelize(name) %>sSelector);
    });
  });

  describe('dispatchLoadAction()', () => {
    beforeEach(() => {
      init();
    });

    it('has a function named dispatchLoadAction', () => {
      expect(typeof service.dispatchLoadAction).toEqual('function');
    });

    it('calls dispatchAction()', () => {
      const spy = spyOn(service, 'dispatchAction').and.returnValue(null);
      service.dispatchLoadAction();
      expect(spy).toHaveBeenCalledWith(new LoadAction());
    });
  });
});
