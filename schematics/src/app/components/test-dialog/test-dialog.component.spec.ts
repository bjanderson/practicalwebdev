import { EMPTY } from 'rxjs';
import { TestDialogComponent } from './test-dialog.component';

const dialog: any = {
  open: () => {
    return { afterClosed: () => EMPTY };
  }
};

let component: any;
function init() {
  component = new TestDialogComponent(dialog);
}

describe('TestDialogComponent', function () {
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
  });
});
