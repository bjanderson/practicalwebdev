import { getObject, getString, getBoolean } from '@practicalwebdev/utils';

export class <%= classify(dialogDataName) %> {

  okButtonText: string;
  cancelButtonText: string;
  confirmed: boolean;
  message: string;
  showCancelButton: boolean;
  title: string;

  constructor(obj?: Partial<<%= classify(dialogDataName) %>>) {
    obj = getObject(obj);
    this.okButtonText = getString(obj.okButtonText, 'OK');
    this.cancelButtonText = getString(obj.cancelButtonText, 'Cancel');
    this.confirmed = getBoolean(obj.confirmed);
    this.message = getString(obj.message, 'Are you sure?');
    this.showCancelButton = getBoolean(obj.showCancelButton, true);
    this.title = getString(obj.title, 'Confirm');
  }
}
