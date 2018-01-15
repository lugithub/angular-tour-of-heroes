import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionComponent } from './question.component';

describe('QuestionComponent', () => {
  let component: QuestionComponent<number>;
  let fixture: ComponentFixture<QuestionComponent<number>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
