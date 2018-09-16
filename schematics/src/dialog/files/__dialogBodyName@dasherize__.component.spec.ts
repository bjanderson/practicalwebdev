import { <%= classify(dialogBodyName) %>Component } from './<%= dasherize(dialogBodyName) %>.component';

const dialogRef: any = {
  close: () => undefined
};
const data: any = {};

let component;
function init() {
  component = new <%= classify(dialogBodyName) %>Component(dialogRef, data);
}

describe('<%= classify(dialogBodyName) %>Component', () => {
  describe('constructor()', () => {
    beforeEach(() => {
      init();
    });

    it('should create the component', () => {
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
