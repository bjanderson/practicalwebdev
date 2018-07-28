import { <%= classify(dialogName) %>Component } from './<%= dasherize(dialogName) %>.component';

describe('<%= classify(dialogName) %>Component', function () {
  let component;

  function init() {
    component = new <%= classify(dialogName) %>Component();
  }

  describe('constructor()', function () {
    beforeEach(function () {
      init();
    });

    it('should create the component', function () {
      expect(component).toBeDefined();
    });
  });
});
