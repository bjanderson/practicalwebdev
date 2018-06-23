import { isArray } from '../array';

export const defaultArray = [];
export const defaultBoolean = false;
export const defaultNumber = 0;
export const defaultObject = {};
export const defaultString = '';

/**
 * Get a boolean from any input.
 *
 * @param {any} [value] - the value that will be returned as a boolean
 * @param {boolean} [defaultValue=false] - the value that will be returned if the value is undefined or null
 * @return {boolean}
 */
export function getBoolean(value, defaultValue = defaultBoolean) {
  if (value === 'false') {
    value = false;
  }
  value = value == null ? defaultValue : !!value;
  return value;
}

/**
 * Get a number from any input.
 *
 * @param {any} [value] - the value that will be returned as a number
 * @param {number} [defaultValue=0] - the value that will be returned if the value is undefined or null
 * @return {number}
 */
export function getNumber(value, defaultValue = defaultNumber) {
  let num = value == null ? defaultValue : Number(value).valueOf();
  if (isNaN(num)) {
    num = defaultValue;
  }
  return num;
}

/**
 * Get an object from any input.
 *
 * If the input value is not an object, an object will be created and the input value will be assigned to its value field.
 *
 * @param {any} [value] - the value that will be returned as an object
 * @param {number} [defaultValue={}] - the value that will be returned if the value is undefined or null
 * @return {object}
 */
export function getObject(value, defaultValue = defaultObject) {
  value = getValueOrDefault(value, defaultValue);
  if (value != null && value.toString() !== '[object Object]') {
    value = {value};
  }
  return value;
}

/**
 * Get a string from any input.
 *
 * @param {any} [value] - the value that will be returned as a string
 * @param {string} [defaultValue=''] - the value that will be returned if the value is undefined or null
 * @return {string}
 */
export function getString(value, defaultValue = defaultString) {
  let str = getValueOrDefault(value, defaultValue);

  if (isArray(value) || isFunction(value)) {
    str = defaultValue;
  }

  if (str != null) {
    str = str.toString();
  }

  if (str === '[object Object]') {
    str = defaultValue;
  }

  return str;
}

/**
 * A helper method to either return a given value or return a default value if the given value is undefined or null.
 *
 * @param {any} [value] - the value that will be returned
 * @param {any} [defaultValue=null] - the value that will be returned if the value is undefined or null
 * @return {any}
 */
export function getValueOrDefault(value, defaultValue = null) {
  return value == null ? defaultValue : value;
}

/**
 * A helper method to either return a given value or null if the given value is undefined or null.
 *
 * @param {any} [value] - the value that will be returned
 * @return {any}
 */
export function getValueOrNull(value) {
  return getValueOrDefault(value, null);
}

/**
 * A helper method to determine if the input value is a function or not.
 *
 * @param {any} [value] - the value that may or may not be a function
 * @return {boolean}
 */
export function isFunction(value) {
  return typeof value === 'function';
}
