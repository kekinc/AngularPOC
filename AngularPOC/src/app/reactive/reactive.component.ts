import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  constructor(public commonService: CommonService) { }

  ngOnInit() {
    this.commonService.getValues().subscribe((value) => {
      console.log(value);
    });
  }

}
