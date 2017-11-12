import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  heroes: Hero[];
}
