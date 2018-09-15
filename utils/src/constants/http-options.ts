import { HttpHeaders } from '@angular/common/http';

export const httpOptions: any = {
  headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
  responseType: 'json',
  withCredentials: true
};
