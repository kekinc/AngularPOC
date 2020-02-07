import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {

  employeeForm: FormGroup;
  emplName: string;
  emplAge: string;

  constructor() { }

  ngOnInit() {

    this.employeeForm = new FormGroup({
      name: new FormControl(this.emplName,
        [Validators.required, Validators.minLength(5)]),
      age: new FormControl(this.emplAge)
    });
  }

  onSubmit() {
    console.log(this.employeeForm.value + '\n');
    console.log(this.employeeForm);
  }

  displayNameError() {
    let displayFlag: boolean;

    if (this.employeeForm.get('name').invalid && (this.employeeForm.get('name').touched || this.employeeForm.get('name').dirty)) {
      displayFlag = true;
    } else {
      displayFlag = false;
    }
    return { 'has-error':displayFlag}
  }

}
