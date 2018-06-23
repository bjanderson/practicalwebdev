
/**
 * Get the given date formatted as .toLocaleDateString
 *
 * @param {Date | number | string} date - The date to format
 * @return {string}
 */
export function formatDate(date) {
  let formattedDate = '';

  try {
    formattedDate = new Date(date).toLocaleDateString();
  } catch (err) {
    console.error('ModelUtils.formatDate - Invalid date: ', date);
  }

  return formattedDate;
}

/**
 * Get a date from a value that represents a date
 *
 * @param {Date | number | string} date - The value to get the date from
 * @return {Date | string}
 */
export function getDate(date) {
  let theDate = '';

  if (isDate(date)) {
    theDate = new Date(date);
  }

  return theDate;
}

/**
 * Check if the given value can be converted into a valid JavaScript Date
 *
 * @param {Date | number | string} date - The value to check if it can be converted to a date
 * @return {boolean}
 */
export function isDate(date) {
  let isValid = true;

  try {
    const d = new Date(date);
    isValid = d.toString() !== 'Invalid Date';
  } catch (err) {
    console.error('ModelUtils.isDate - Invalid Date: ', date);
    isValid = false;
  }
  return isValid;
}
