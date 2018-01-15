import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { Component, DebugElement }    from '@angular/core';

import { DashboardHeroComponent } from './dashboard-hero.component';
import { Hero } from '../model/hero';

@Component({
  template: `
    <dashboard-hero  [hero]="hero"  (selected)="onSelected($event)"></dashboard-hero>`
})
class TestHostComponent {
  hero = new Hero(42, 'Test Name');
  selectedHero: Hero;
  onSelected(hero: Hero) { this.selectedHero = hero; }
}

fdescribe('DashboardHeroComponent', () => {
  let comp: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let debugElement: DebugElement;
  let nativeElement: HTMLElement;
  const expectedHero = new Hero(42, 'Test Name');

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardHeroComponent, TestHostComponent ],
    })
    .compileComponents(); // compile template and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    comp    = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.css('h3'));

    nativeElement  = debugElement.nativeElement;

    comp.hero = expectedHero;
    fixture.detectChanges(); // trigger initial data binding
  });

  it('should display hero name', () => {
    const expectedPipedName = expectedHero.name.toUpperCase();
    expect(nativeElement.textContent).toContain(expectedPipedName);
  });

  it('should raise selected event when clicked', () => {
    debugElement.triggerEventHandler('click', null);
    expect(comp.selectedHero).toBe(expectedHero);
  });
});
