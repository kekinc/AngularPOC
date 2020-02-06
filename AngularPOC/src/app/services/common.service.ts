import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  httpOptions = {
    headers: new HttpHeaders({
      // 'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public getCategories() {
    return this.httpClient.get('http://localhost:3000/categories');
  }

  public getRates() {
    return this.httpClient.get('http://localhost:3000/rates');
  }
}
