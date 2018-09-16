import { getObject, getString, getBoolean, getValueOrNull } from '@practicalwebdev/utils';
import { <%= classify(dialogName) %>Component } from './<%= dasherize(dialogName) %>.component';

export class <%= classify(dialogDataName) %> {

  okButtonText: string;
  cancelButtonText: string;
  confirmed: boolean;
  message: string;
  parent: <%= classify(dialogName) %>Component;
  showCancelButton: boolean;
  title: string;

  constructor(obj?: Partial<<%= classify(dialogDataName) %>>) {
    obj = getObject(obj);
    this.okButtonText = getString(obj.okButtonText, 'OK');
    this.cancelButtonText = getString(obj.cancelButtonText, 'Cancel');
    this.confirmed = getBoolean(obj.confirmed);
    this.message = getString(obj.message, 'Are you sure?');
    this.parent = getValueOrNull(obj.parent);
    this.showCancelButton = getBoolean(obj.showCancelButton, true);
    this.title = getString(obj.title, 'Confirm');
  }
}
