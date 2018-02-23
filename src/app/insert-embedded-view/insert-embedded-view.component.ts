import { Component, AfterViewInit, ViewEncapsulation,
ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-insert-embedded-view',
  templateUrl: './insert-embedded-view.component.html',
  styleUrls: ['./insert-embedded-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InsertEmbeddedViewComponent implements AfterViewInit {
  j = 0;
  viewRefs = [];
  @ViewChild("vc", {read: ViewContainerRef}) vc: ViewContainerRef;
  @ViewChild("tpl") tpl: TemplateRef<any>;

  ngAfterViewInit() {
  }

  insert() {
    const context = { i: this.j };
    let view = this.tpl.createEmbeddedView(context);
    this.vc.insert(view);
    this.j++;
    this.viewRefs.push(view);
  }

  detach(i) {
      this.vc.detach(i);
  }

  move(i, index) {
    this.vc.move(this.viewRefs[i], index);
  }
  
  clear() {
    this.vc.clear();
  }
}
