import { getNumber, getObject, getString } from '../../utils';

export class ErrorResponse {

  errorMessage: string;
  status: number;

  constructor(obj?: any) {
    obj = getObject(obj);
    this.errorMessage = getString(obj.errorMessage, 'An Error Occurred');
    this.status = getNumber(obj.status);
  }
}
