import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { DashboardHeroComponent } from './dashboard-hero.component';
import { Hero } from '../model/hero';

fdescribe('DashboardHeroComponent', () => {
  let comp: DashboardHeroComponent;
  let fixture: ComponentFixture<DashboardHeroComponent>;
  let debugElement: DebugElement;
  let nativeElement: HTMLElement;
  const expectedHero = new Hero(42, 'Test Name');

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardHeroComponent ],
    })
    .compileComponents(); // compile template and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHeroComponent);
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
    let selectedHero: Hero;
    comp.selected.subscribe((hero: Hero) => selectedHero = hero);

    debugElement.triggerEventHandler('click', null);
    expect(selectedHero).toBe(expectedHero);
  });
});
