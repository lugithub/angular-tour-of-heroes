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
  fieldName = 'age';
  fieldValue = '32';
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      [this.fieldName]: new FormControl(this.fieldValue)
    });
  }

}
