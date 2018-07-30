import { of } from 'rxjs';
import { <%= classify(dialogName) %>Component } from './<%= dasherize(dialogName) %>.component';

const dialog: any = {
  open: () => {
    return { afterClosed: () => of(true) };
  }
};

let component: any;
function init() {
  component = new <%= classify(dialogName) %>Component(dialog);
}

describe('<%= classify(dialogName) %>Component', function () {
  describe('constructor()', function () {
    beforeEach(function () {
      init();
    });

    it('should create the component', function () {
      expect(component).toBeDefined();
    });
  });

  describe('open()', () => {
    it('has a function named open', () => {
      expect(typeof component.open).toEqual('function');
    });

    it('calls dialog.open()', () => {
      const spy = spyOn(component.dialog, 'open').and.callThrough();
      component.open();
      expect(spy).toHaveBeenCalled();
    });

    it('calls confirmed.emit() after the dialog is closed', () => {
      const spy = spyOn(component.confirmed, 'emit').and.callThrough();
      component.open();
      expect(spy).toHaveBeenCalled();
    });
  });
});
