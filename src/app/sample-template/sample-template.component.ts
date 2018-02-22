import { Component, AfterViewInit, ViewEncapsulation,
  ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-sample-template',
  templateUrl: './sample-template.component.html',
  styleUrls: ['./sample-template.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SampleTemplateComponent implements AfterViewInit  {

  @ViewChild('tpl') tpl: TemplateRef<any>;

  ngAfterViewInit() {
      const elementRef = this.tpl.elementRef;
      console.log(elementRef.nativeElement.textContent);
  }
}
