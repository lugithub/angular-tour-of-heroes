import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseNgTemplateOutletComponent } from './use-ng-template-outlet.component';

describe('UseNgTemplateOutletComponent', () => {
  let component: UseNgTemplateOutletComponent;
  let fixture: ComponentFixture<UseNgTemplateOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseNgTemplateOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseNgTemplateOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
