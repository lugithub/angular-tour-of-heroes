import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../question-base';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QuestionComponent<T> implements OnInit {
  @Input() question: QuestionBase<T>;
  @Input() form: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
