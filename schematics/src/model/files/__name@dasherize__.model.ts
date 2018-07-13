import { getObject, getString } from '@practicalwebdev/utils';

export class <%= classify(name) %> {

  value: string;

  constructor(obj?: Partial<<%= classify(name) %>>) {
    obj = getObject(obj);
    this.value = getString(obj.value);
  }
}
