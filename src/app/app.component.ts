import { Component, ViewChild, OnInit, ComponentFactoryResolver } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { MessagesComponent} from './messages/messages.component';
import { DynamicAnchorDirective } from './dynamic-anchor.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  heroes: Hero[] = [];
  title = 'Tour of Heroes';
  theme = 'theme-light';
  instance: MessagesComponent;
  indices: {id: string, index: number}[] = [];

  @ViewChild('testTemplate') testTemplate;
  @ViewChild(MessagesComponent) messages: MessagesComponent;
  @ViewChild(DynamicAnchorDirective) dynamicPlaceHolder: DynamicAnchorDirective;
  constructor(private heroService: HeroService,
    private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  changeTheme() {
    this.theme =
    this.theme === 'theme-light' ? 'theme-dark' : 'theme-light';

    this.open();
  }

  open() {
    const messagesComponentFactory = this.componentFactoryResolver.resolveComponentFactory(MessagesComponent);
    const componentRef = this.dynamicPlaceHolder.viewContainer.createComponent(messagesComponentFactory);
    this.instance = componentRef.instance;
    // const viewRef =
    this.instance.dataContext = this.heroes[2];
    this.instance.template = this.testTemplate;

    this.indices.push({id: this.instance.id, index: this.indices.length});
  }

  close() {
    const index = this.indices[this.indices.length - 1].index;
    this.indices = this.indices.slice(0, this.indices.length - 1);
    this.dynamicPlaceHolder.viewContainer.remove(index);
  }
}
