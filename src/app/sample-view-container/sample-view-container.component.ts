import { Component, AfterViewInit, ViewEncapsulation,
  ViewContainerRef,
  ViewChild
 } from '@angular/core';

@Component({
  selector: 'app-sample-view-container',
  templateUrl: './sample-view-container.component.html',
  styleUrls: ['./sample-view-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SampleViewContainerComponent implements AfterViewInit {

  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;

  ngAfterViewInit(): void {
      console.log(this.vc.element.nativeElement.textContent);
  }

}
