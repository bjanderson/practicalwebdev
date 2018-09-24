import { Injectable } from '@angular/core';
import { ApiService } from '@practicalwebdev/utils';

@Injectable({
  providedIn: 'root'
})
export class <%= classify(name) %>Service {

  url = '';

  constructor(private api: ApiService) {}

  get() {
    return this.api.get(this.url);
  }
}
