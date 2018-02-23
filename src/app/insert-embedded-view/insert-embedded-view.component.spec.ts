import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertEmbeddedViewComponent } from './insert-embedded-view.component';

describe('InsertEmbeddedViewComponent', () => {
  let component: InsertEmbeddedViewComponent;
  let fixture: ComponentFixture<InsertEmbeddedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertEmbeddedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertEmbeddedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
