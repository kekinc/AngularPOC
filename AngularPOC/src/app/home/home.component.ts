import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  rates: any = [];

  constructor(private _commonService: CommonService) { }

  ngOnInit() {

    this._commonService.getRates().subscribe(data => {
      for (let prop in data) {
        if (data && data.hasOwnProperty(prop)) {
          let rateObj = data[prop];
          rateObj.label = prop;
          this.rates.push(rateObj);
        }
      }
    }, err => { });

    // Observable.fromE
  }

}
