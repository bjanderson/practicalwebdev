
export function formatDate(date: any): string {
  let formattedDate = '';

  try {
    formattedDate = new Date(date).toLocaleDateString();
  } catch (err) {
    console.error('ModelUtils.formatDate - Invalid date: ', date);
  }

  return formattedDate;
}

export function getDate(date: any): Date | string {
  let theDate: Date | string = '';

  if (isDate(date)) {
    theDate = new Date(date);
  }

  return theDate;
}

export function isDate(date: any): boolean {
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
