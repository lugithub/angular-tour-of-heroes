import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { QuestionBase }              from '../question-base';
import { QuestionControlService }    from '../question-control.service';
import { TextboxQuestion }           from '../question-textbox';
import { NumberQuestion } from '../question-number';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {  }

  ngOnInit() {
    this.questions = [
      new TextboxQuestion({
        key: 'firstname',
        value: 'foo',
        label: 'first name',
        required: true
      }),
      new NumberQuestion({
        key: 'age',
        value: 32,
        label: 'age',
        required: true
      })
    ];
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
