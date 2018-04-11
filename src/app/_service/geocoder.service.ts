import { Injectable } from '@angular/core';
import { URLS } from './var.constant';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class GeocoderService {

  private url: string = URLS.base + URLS.simple_Addres;

  constructor(private http: HttpClient) { }

  simpleAddress(ubigeo:string, address:string, token:string){
    return this.http.get(`${this.url}?address=${address}&ubigeo=${ubigeo}&token=${token}`);
  }

}
