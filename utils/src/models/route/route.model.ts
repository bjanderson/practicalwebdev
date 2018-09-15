import { NavigationExtras } from '@angular/router';
import { getObject, getString, getValueOrDefault, getValueOrNull } from '../../utils';

export class Route {

  extras: NavigationExtras;
  path: any;
  params: any;
  url: string;

  constructor(obj?: Partial<Route>) {
    obj = getObject(obj);
    this.extras = getValueOrDefault(obj.extras, { skipLocationChange: false });
    this.path = getValueOrNull(obj.path);
    this.params = getValueOrNull(obj.params);
    this.url = getString(obj.url);
  }
}
