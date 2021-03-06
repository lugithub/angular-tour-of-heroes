import { Component, AfterViewInit, ViewEncapsulation,
  ElementRef,
  ViewChild } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SampleComponent implements AfterViewInit {

  @ViewChild('tref', {read: ElementRef}) tref: ElementRef;

  constructor(private hostElement: ElementRef) {
    console.log(this.hostElement.nativeElement.outerHTML);
  }

  ngAfterViewInit(): void {
      // outputs `I am span`
      console.log(this.tref.nativeElement.textContent);
  }

}
