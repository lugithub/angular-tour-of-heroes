import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseNgComponentOutletComponent } from './use-ng-component-outlet.component';

describe('UseNgComponentOutletComponent', () => {
  let component: UseNgComponentOutletComponent;
  let fixture: ComponentFixture<UseNgComponentOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseNgComponentOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseNgComponentOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
