import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-use-ng-template-outlet',
  templateUrl: './use-ng-template-outlet.component.html',
  styleUrls: ['./use-ng-template-outlet.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UseNgTemplateOutletComponent implements OnInit {
  myContext = {$implicit: 'World', localSk: 'Svet'};
  constructor() { }

  ngOnInit() {
  }

}
