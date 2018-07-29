import { defaultBoolean } from '@practicalwebdev/utils';

import { TestDialogData } from './test-dialog-data.model';

describe('TestDialogData', function () {
  describe('constructor defaults', function () {
    const defaults = {
      okButtonText: 'OK',
      cancelButtonText: 'Cancel',
      confirmed: defaultBoolean,
      message: 'Are you sure?',
      showCancelButton: true,
      title: 'Confirm'
    };

    it('should have the expected fields', function () {
      expect(Object.keys(defaults)).toEqual(Object.keys(new TestDialogData()));
    });

    it('should set the default values when given no input object', function () {
      expect(Object.values(defaults)).toEqual(Object.values(new TestDialogData()));
    });

    it('should set the default values when given null', function () {
      expect(Object.values(defaults)).toEqual(Object.values(new TestDialogData(null)));
    });
  });

  describe('constructor assignments', function () {
    it('should set all values passed into the constructor', function () {
      const test = {
        okButtonText: 'test okButtonText',
        cancelButtonText: 'test cancelButtonText',
        confirmed: true,
        message: 'test message',
        showCancelButton: false,
        title: 'test title'
      };

      expect(Object.values(test)).toEqual(Object.values(new TestDialogData(test)));
    });
  });
});
