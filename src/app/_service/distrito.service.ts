import { Injectable } from '@angular/core';
import { Distrito } from '../_model/distrito';
import { URLS } from './var.constant';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DistritoService {

  private url: string = URLS.base + URLS.distritos;

  constructor(private http: HttpClient) { }

  private getHeaders(token:string){
    let headers = new HttpHeaders().set('Authorization', `bearer ${token}`).set('Content-Type', 'application/json');
    return headers;
  }

  getDistritos(query:string, token:string){
    let distritos:Array<Distrito> = [];
    return this.http.get<Array<Distrito>>(`${this.url}?search=${query}`,{
      headers: this.getHeaders(token)
    });
  }

}
