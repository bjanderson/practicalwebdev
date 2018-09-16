import { defaultBoolean } from '@practicalwebdev/utils';
import { <%= classify(dialogDataName) %> } from './<%= dasherize(dialogDataName) %>.model';

describe('<%= classify(dialogDataName) %>', () => {
  describe('constructor defaults', () => {
    const defaults = {
      okButtonText: 'OK',
      cancelButtonText: 'Cancel',
      confirmed: defaultBoolean,
      message: 'Are you sure?',
      parent: null,
      showCancelButton: true,
      title: 'Confirm'
    };

    it('should have the expected fields', () => {
      expect(Object.keys(defaults)).toEqual(Object.keys(new <%= classify(dialogDataName) %>()));
    });

    it('should set the default values when given no input object', () => {
      expect(Object.values(defaults)).toEqual(Object.values(new <%= classify(dialogDataName) %>()));
    });

    it('should set the default values when given null', () => {
      expect(Object.values(defaults)).toEqual(Object.values(new <%= classify(dialogDataName) %>(null)));
    });
  });

  describe('constructor assignments', () => {
    it('should set all values passed into the constructor', () => {
      const test = {
        okButtonText: 'test okButtonText',
        cancelButtonText: 'test cancelButtonText',
        confirmed: true,
        message: 'test message',
        parent: null,
        showCancelButton: false,
        title: 'test title'
      };

      expect(Object.values(test)).toEqual(Object.values(new <%= classify(dialogDataName) %>(test)));
    });
  });
});
