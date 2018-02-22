import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleViewContainerComponent } from './sample-view-container.component';

describe('SampleViewContainerComponent', () => {
  let component: SampleViewContainerComponent;
  let fixture: ComponentFixture<SampleViewContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleViewContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleViewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
