import { <%= classify(name) %>Component } from './<%= dasherize(name) %>.component';

let component: any;

function init() {
  component = new <%= classify(name) %>Component();
}

describe('<%= classify(name) %>Component', function () {
  describe('constructor()', function () {
    beforeEach(function () {
      init();
    });

    it('should create the component', function () {
      expect(component).toBeDefined();
    });
  });
});
