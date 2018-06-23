import { hasPropertyOf } from '../model';
import { getBoolean, getNumber, getString, getValueOrDefault } from '../primitive';

/**
 * Get an array from any input.
 *
 * If given a single item, it will be added to an array and that array will be returned.
 *
 * @param {any} [objs] - the objects that will be returned as an array
 * @return {any[]}
 */
export function getArray(objs) {
  objs = getValueOrDefault(objs, []);
  let array = [];

  if (isArray(objs)) {
    array = objs;
  } else {
    array = [objs];
  }

  return array;
}

/**
 * Get an array of boolean values from any input.
 *
 * If given a single item, it will be added to an array and that array will be returned.
 *
 * @param {any} [objs] - the objects that will be returned as an array
 * @return {boolean[]}
 */
export function getArrayOfBooleans(objs) {
  objs = getArray(objs);
  const array = [];

  for (let obj of objs) {
    if (obj != null) {
      obj = getBoolean(obj);
      array.push(obj);
    }
  }

  return array;
}

/**
 * Get an array of models of the given class from the given object(s).
 *
 * If given a single item, it will be added to an array and that array will be returned.
 *
 * @param {T} [clazz] - the class that each object in the array will be an instance of
 * @param {any} [objs] - the objects that will be converted to the class type and returned as an array
 * @return {T[]}
 */
export function getArrayOfModels(clazz, objs) {
  objs = getArray(objs);
  const array = [];

  for (const obj of objs) {
    if (hasPropertyOf(clazz, obj)) {
      array.push(new clazz(obj));
    }
  }

  return array;
}

/**
 * Get an array of number values from any input.
 *
 * If given a single item, it will be added to an array and that array will be returned.
 *
 * @param {any} [objs] - the objects that will be returned as an array
 * @return {number[]}
 */
export function getArrayOfNumbers(objs) {
  objs = getArray(objs);
  const array = [];

  for (let obj of objs) {
    if (obj != null) {
      obj = getNumber(obj);
      array.push(obj);
    }
  }

  return array;
}

/**
 * Get an array of string values from any input.
 *
 * If given a single item, it will be added to an array and that array will be returned.
 *
 * @param {any} [objs] - the objects that will be returned as an array
 * @return {string[]}
 */
export function getArrayOfStrings(objs) {
  objs = getArray(objs);
  const array = [];

  for (let obj of objs) {
    if (obj != null) {
      obj = getString(obj);
      array.push(obj);
    }
  }

  return array;
}

/**
 * A helper method to determine if the input obj is an array or not.
 *
 * @param {any} [obj] - the obj that may or may not be an array
 * @return {boolean}
 */
export function isArray(obj) {
  obj = getValueOrDefault(obj, []);
  return obj.constructor === Array;
}
