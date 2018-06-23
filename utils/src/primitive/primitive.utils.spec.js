import {
  defaultArray,
  defaultBoolean,
  defaultNumber,
  defaultObject,
  defaultString,
  getBoolean,
  getNumber,
  getObject,
  getString,
  getValueOrDefault,
  getValueOrNull
} from './primitive.utils';

describe('primitive.utils', function () {

  describe('getBoolean(value, defaultValue)', function () {
    it('is a function', function () {
      expect(typeof getBoolean).toEqual('function');
    });

    it('returns the defaultBoolean when the input is undefined', function () {
      const expected = defaultBoolean;
      const result = getBoolean();
      expect(result).toEqual(expected);
    });

    it('returns the defaultBoolean when the input is null', function () {
      const expected = defaultBoolean;
      const result = getBoolean(null);
      expect(result).toEqual(expected);
    });

    it('returns the defaultValue when the input is undefined', function () {
      const expected = !defaultBoolean;
      const result = getBoolean(undefined, !defaultBoolean);
      expect(result).toEqual(expected);
    });

    it('returns the defaultValue when the input is null', function () {
      const expected = !defaultBoolean;
      const result = getBoolean(null, !defaultBoolean);
      expect(result).toEqual(expected);
    });

    it('returns true', function () {
      const expected = true;
      const result = getBoolean(true);
      expect(result).toEqual(expected);
    });

    it('returns false', function () {
      const expected = false;
      const result = getBoolean(false);
      expect(result).toEqual(expected);
    });

    it('returns true when input is "true"', function () {
      const expected = true;
      const result = getBoolean("true");
      expect(result).toEqual(expected);
    });

    it('returns false when input is "false"', function () {
      const expected = false;
      const result = getBoolean("false");
      expect(result).toEqual(expected);
    });

    it('returns true when input is 1', function () {
      const expected = true;
      const result = getBoolean(1);
      expect(result).toEqual(expected);
    });

    it('returns false when input is 0', function () {
      const expected = false;
      const result = getBoolean(0);
      expect(result).toEqual(expected);
    });

    it('returns true when input is a string "a string"', function () {
      const expected = true;
      const result = getBoolean('a string');
      expect(result).toEqual(expected);
    });

    it('returns false when input is ""', function () {
      const expected = false;
      const result = getBoolean('');
      expect(result).toEqual(expected);
    });
  });

  describe('getNumber(value, defaultValue)', function () {
    it('is a function', function () {
      expect(typeof getNumber).toEqual('function');
    });

    it('returns the defaultNumber when the input is undefined', function () {
      const expected = defaultNumber;
      const result = getNumber();
      expect(result).toEqual(expected);
    });

    it('returns the defaultNumber when the input is null', function () {
      const expected = defaultNumber;
      const result = getNumber(null);
      expect(result).toEqual(expected);
    });

    it('returns null as the defaultValue', function () {
      const result = getNumber(undefined, null);
      expect(result).toBeNull();
    });

    it('returns the defaultValue when given a NaN string', function () {
      const expected = 3;
      const result = getNumber('abc', 3);
      expect(result).toEqual(expected);
    });

    it('returns the given number', function () {
      const expected = 3;
      const result = getNumber(3);
      expect(result).toEqual(expected);
    });

    it('returns a number when the input is a number as a string', function () {
      const expected = 3;
      const result = getNumber('3');
      expect(result).toEqual(expected);
    });

    it('returns the defaultNumber when the input is a NaN string', function () {
      const expected = defaultNumber;
      const result = getNumber('abc');
      expect(result).toEqual(expected);
    });

    it('returns a float from a string', function () {
      const expected = 1.2345;
      const result = getNumber('1.2345');
      expect(result).toEqual(expected);
    });
  });

  describe('getObject(value, defaultValue)', function () {
    it('is a function', function () {
      expect(typeof getObject).toEqual('function');
    });

    it('returns the defaultObject when the input is undefined', function () {
      const expected = defaultObject;
      const result = getObject();
      expect(result).toEqual(expected);
    });

    it('returns the defaultObject when the input is null', function () {
      const expected = defaultObject;
      const result = getObject(null);
      expect(result).toEqual(expected);
    });

    it('returns null as the defaultValue', function () {
      const result = getObject(undefined, null);
      expect(result).toBeNull();
    });

    it('returns the defaultValue', function () {
      const expected = {test: 'test'};
      const result = getObject(undefined, {test: 'test'});
      expect(result).toEqual(expected);
    });

    it('returns the given object', function () {
      const expected = {test: 'test'};
      const result = getObject({test: 'test'});
      expect(result).toEqual(expected);
    });

    it('returns an object with the input string as a value of the returned object', function () {
      const expected = {value: 'test'};
      const result = getObject('test');
      expect(result).toEqual(expected);
    });

    it('returns an object with the input boolean as a value of the returned object', function () {
      const expected = {value: true};
      const result = getObject(true);
      expect(result).toEqual(expected);
    });

    it('returns an object with the input number as a value of the returned object', function () {
      const expected = {value: 5};
      const result = getObject(5);
      expect(result).toEqual(expected);
    });

    it('returns an object with the input array as a value of the returned object', function () {
      const expected = {value: ['test 1', 'test 2']};
      const result = getObject(['test 1', 'test 2']);
      expect(result).toEqual(expected);
    });
  });

  describe('getString(value, defaultValue)', function () {
    it('is a function', function () {
      expect(typeof getString).toEqual('function');
    });

    it('returns the defaultString when the input is undefined', function () {
      const expected = defaultString;
      const result = getString();
      expect(result).toEqual(expected);
    });

    it('returns the defaultString when the value null', function () {
      const expected = defaultString;
      const result = getString(null);
      expect(result).toEqual(expected);
    });

    it('returns the input string', function () {
      const expected = 'test';
      const result = getString('test');
      expect(result).toEqual(expected);
    });

    it('returns the custom defaultValue when the value is undefined', function () {
      const expected = 'test';
      const result = getString(undefined, 'test');
      expect(result).toEqual(expected);
    });

    it('returns the custom defaultValue when the value is null', function () {
      const expected = 'test';
      const result = getString(null, 'test');
      expect(result).toEqual(expected);
    });

    it('returns the null as the defaultValue', function () {
      const result = getString(undefined, null);
      expect(result).toBeNull();
    });

    it('returns the defaultValue when the input is an object', function () {
      const expected = defaultString;
      const result = getString({});
      expect(result).toEqual(expected);
    });

    it('returns the defaultValue when the input is an array', function () {
      const expected = defaultString;
      const result = getString(['test 1', 'test 2']);
      expect(result).toEqual(expected);
    });

    it('returns the defaultValue when the input is a function', function () {
      const expected = defaultString;
      const result = getString(() => 'test 1');
      expect(result).toEqual(expected);
    });

    it('returns the toString() result when the input specifies a custom toString function', function () {
      const input = {
        toString: () => 'custom toString result'
      };
      const result = getString(input);
      expect(result).toEqual('custom toString result');
    });

    it('returns "0" when given 0', function () {
      const expected = '0';
      const result = getString(0);
      expect(result).toEqual(expected);
    });

    it('returns the given number as a string', function () {
      const expected = '11';
      const result = getString(11);
      expect(result).toEqual(expected);
    });

    it('returns "false" when given false', function () {
      const expected = 'false';
      const result = getString(false);
      expect(result).toEqual(expected);
    });

    it('returns "true" when given true', function () {
      const expected = 'true';
      const result = getString(true);
      expect(result).toEqual(expected);
    });
  });

  describe('getValueOrDefault(value, defaultValue)', function () {
    it('is a function', function () {
      expect(typeof getValueOrDefault).toEqual('function');
    });

    it('returns null when the input is undefined', function () {
      const result = getValueOrDefault();
      expect(result).toBeNull();
    });

    it('returns null when the input is null', function () {
      const result = getValueOrDefault(null);
      expect(result).toBeNull();
    });

    it('returns null when the input is null', function () {
      const result = getValueOrDefault(null);
      expect(result).toBeNull();
    });

    it('returns the value when the input is defined', function () {
      const expected = 'test';
      const result = getValueOrDefault('test');
      expect(result).toEqual(expected);
    });

    it('returns the defaultValue when the input is undefined and the default is set', function () {
      const expected = 'test';
      const result = getValueOrDefault(undefined, 'test');
      expect(result).toEqual(expected);
    });

    it('returns the defaultValue when the input is null and the default is set', function () {
      const expected = 'test';
      const result = getValueOrDefault(null, 'test');
      expect(result).toEqual(expected);
    });
  });

  describe('getValueOrNull(value)', function () {
    it('is a function', function () {
      expect(typeof getValueOrNull).toEqual('function');
    });

    it('returns null when the input is undefined', function () {
      const result = getValueOrNull();
      expect(result).toBeNull();
    });

    it('returns null when the input is null', function () {
      const result = getValueOrNull(null);
      expect(result).toBeNull();
    });

    it('returns the value when the input is defined', function () {
      const expected = 'test';
      const result = getValueOrNull('test');
      expect(result).toEqual(expected);
    });
  });

});
