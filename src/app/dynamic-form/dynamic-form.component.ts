import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DynamicFormComponent implements OnInit {
  form: FormGroup;
  person = {
    firstname: 'juri',
    age: 32
  };
  keys = Object.keys(this.person);
  constructor() { }

  ngOnInit() {
    const formData = Object.keys(this.person).reduce((accumulator, value) => {
      return {
        ...accumulator,
        [value]: new FormControl(this.person[value])}
    }, {});
    this.form = new FormGroup(formData);
  }

}
