import { defaultString } from '@practicalwebdev/utils';

import { <%= classify(name) %> } from './<%= dasherize(name) %>.model';

describe('<%= classify(name) %>', () => {
  describe('constructor defaults', () => {
    const defaults = {
      value: defaultString
    };

    it('should have the expected fields', () => {
      expect(Object.keys(defaults)).toEqual(Object.keys(new <%= classify(name) %>()));
    });

    it('should set the default values when given no input object', () => {
      expect(Object.values(defaults)).toEqual(Object.values(new <%= classify(name) %>()));
    });

    it('should set the default values when given null', () => {
      expect(Object.values(defaults)).toEqual(Object.values(new <%= classify(name) %>(null)));
    });
  });

  describe('constructor assignments', () => {
    it('should set all values passed into the constructor', () => {
      const test = {
        value: 'test value'
      };

      expect(Object.values(test)).toEqual(Object.values(new <%= classify(name) %>(test)));
    });
  });
});
