import { defaultString } from '@practicalwebdev/utils';

import { <%= classify(name) %> } from './<%= dasherize(name) %>.model';

describe('<%= classify(name) %>', function () {
  describe('constructor defaults', function () {
    const defaults = {
      value: defaultString
    };

    it('should have the expected fields', function () {
      expect(Object.keys(defaults)).toEqual(Object.keys(new <%= classify(name) %>()));
    });

    it('should set the default values when given no input object', function () {
      expect(Object.values(defaults)).toEqual(Object.values(new <%= classify(name) %>()));
    });

    it('should set the default values when given null', function () {
      expect(Object.values(defaults)).toEqual(Object.values(new <%= classify(name) %>(null)));
    });
  });

  describe('constructor assignments', function () {
    it('should set all values passed into the constructor', function () {
      const test = {
        value: 'test value'
      };

      expect(Object.values(test)).toEqual(Object.values(new <%= classify(name) %>(test)));
    });
  });
});
