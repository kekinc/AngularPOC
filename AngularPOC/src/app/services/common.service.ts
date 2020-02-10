import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


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

  public getValues() {
    let counter = 0;
    const observableIns = new Observable(obs => {
      setInterval(() => {
        obs.next(++ counter);
      }, 1000);
    });

    return observableIns;
  }

}
