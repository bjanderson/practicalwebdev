import { TestDialogBodyComponent } from './test-dialog-body.component';

const dialogRef: any = {
  close: () => undefined
};
const data: any = {};

let component;
function init() {
  component = new TestDialogBodyComponent(dialogRef, data);
}

describe('TestDialogBodyComponent', function () {
  describe('constructor()', function () {
    beforeEach(function () {
      init();
    });

    it('should create the component', function () {
      expect(component).toBeDefined();
    });
  });

  describe('confirm()', () => {
    it('calls dialogRef.close()', () => {
      const spy = spyOn(component.dialogRef, 'close').and.callThrough();
      component.confirm();
      expect(spy).toHaveBeenCalled();
    });
  });
});
