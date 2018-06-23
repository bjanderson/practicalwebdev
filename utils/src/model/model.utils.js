
/**
 * Determine if an obj has any property of a given class.
 *
 * @param {any} clazz - The class to compare the given object to
 * @param {any} obj - the object that could have properties in common with the given class
 * @return {boolean}
 */
export function hasPropertyOf(clazz, obj) {
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
 * Determine if an obj has all properties in common with a given class.
 *
 * @param {any} clazz - The class to compare the given object to
 * @param {any} obj - the object that could have properties in common with the given class
 * @return {boolean}
 */
export function isInstanceOf(clazz, obj) {
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
