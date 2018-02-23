import { Component, OnInit, ViewEncapsulation,
  Injectable,
  ReflectiveInjector,
  Injector
} from '@angular/core';

@Injectable()
export class Greeter {
  suffix = '!';
}

@Component({
  selector: 'complete-component',
  template: `Complete: <ng-content></ng-content> <ng-content></ng-content>{{ greeter.suffix }}`
})
export class CompleteComponent {
  constructor(public greeter: Greeter) {}
}

@Component({
  selector: 'app-use-ng-component-outlet',
  templateUrl: './use-ng-component-outlet.component.html',
  styleUrls: ['./use-ng-component-outlet.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UseNgComponentOutletComponent {
  // This field is necessary to expose CompleteComponent to the template.
  CompleteComponent = CompleteComponent;
  myInjector: Injector;

  myContent = [[document.createTextNode('Ahoj')], [document.createTextNode('Svet')]];

  constructor(injector: Injector) {
    this.myInjector = ReflectiveInjector.resolveAndCreate([Greeter], injector);
  }

}
