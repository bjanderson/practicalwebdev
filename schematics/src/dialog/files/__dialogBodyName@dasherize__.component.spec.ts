import { <%= classify(dialogBodyName) %>Component } from './<%= dasherize(dialogBodyName) %>.component';

describe('<%= classify(dialogBodyName) %>Component', function () {
  let component;

  function init() {
    component = new <%= classify(dialogBodyName) %>Component();
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
