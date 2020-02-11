import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { mergeMap, map } from 'rxjs/operators';


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  constructor(public commonService: CommonService) { }

  ngOnInit() {

    const oddObservable = this.commonService.getOddValues();
    this.commonService.getValues().pipe(mergeMap(value => {
      return oddObservable.pipe(map(oddValue => {
        return value + oddValue;
      }))
    })).subscribe(value => {
      console.log(value);
    });
  }

}
