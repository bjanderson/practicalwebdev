import { getValueOrNull } from '../primitive';

/**
 * Check if the given object has any properties in common with an instance of the given class.
 */
export function hasPropertyOf(clazz: any, obj: any): boolean {
  if (clazz == null || obj == null) { return false; }
  const model = new clazz();
  const modelKeys = Object.keys(model);

  for (const key of modelKeys) {
    if (obj.hasOwnProperty(key)) {
      return true;
    }
  }

  return false;
}

/**
 * Check if the given object has all properties in common with an instance of the given class.
 */
export function isInstanceOf(clazz: any, obj: any): boolean {
  if (clazz == null || obj == null) { return false; }
  const model = new clazz();
  const modelKeys = Object.keys(model);

  for (const key of modelKeys) {
    if (!obj.hasOwnProperty(key)) {
      return false;
    }
  }

  return true;
}

/**
 * If the given object is defined, create a new instance of the given class with it.
 * Otherwise return null.
 */
export function newIfDefined(clazz: any, obj: any): any {
  const value = getValueOrNull(obj);
  if (value != null) {
    return new clazz(value);
  }

  return null;
}
