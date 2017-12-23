import { Component, ViewChild, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { MessagesComponent} from './messages/messages.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  heroes: Hero[] = [];
  title = 'Tour of Heroes';
  theme = 'theme-light';
  @ViewChild('testTemplate') testTemplate;
  @ViewChild(MessagesComponent) messages: MessagesComponent;
  constructor(private heroService: HeroService) {

  }

  ngOnInit() {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  changeTheme() {
    this.theme =
    this.theme === 'theme-light' ? 'theme-dark' : 'theme-light';

    this.messages.open();
  }
}
