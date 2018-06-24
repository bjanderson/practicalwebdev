import { isArray } from '../array';

export const defaultArray = [];
export const defaultBoolean = false;
export const defaultNumber = 0;
export const defaultObject = {};
export const defaultString = '';

export function getBoolean(value: any, defaultValue: boolean = defaultBoolean): boolean {
  if (value === 'false') {
    value = false;
  }
  value = value == null ? defaultValue : !!value;
  return value;
}

export function getNumber(value: any, defaultValue: number | null = defaultNumber): number | null {
  let num = value == null ? defaultValue : Number(value).valueOf();
  if (num == null || isNaN(num)) {
    num = defaultValue;
  }
  return num;
}

export function getObject(value: any, defaultValue: any = defaultObject): any {
  value = getValueOrDefault(value, defaultValue);
  if (value != null && value.toString() !== '[object Object]') {
    value = {value};
  }
  return value;
}

export function getString(value: any, defaultValue: string | null = defaultString): string | null {
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

export function getValueOrDefault(value: any, defaultValue: any = null): any {
  return value == null ? defaultValue : value;
}

export function getValueOrNull(value: any): any {
  return getValueOrDefault(value, null);
}

export function isFunction(value: any): boolean {
  return typeof value === 'function';
}
