import { getObject, getString } from '@practicalwebdev/utils';

export class <%= classify(dialogDataName) %> {

  value: string;

  constructor(obj?: Partial<<%= classify(dialogDataName) %>>) {
    obj = getObject(obj);
    this.value = getString(obj.value);
  }
}
