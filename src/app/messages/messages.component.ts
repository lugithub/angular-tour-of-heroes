import { Component, OnInit, ViewEncapsulation, Input, ViewChild } from '@angular/core';
import { MessageService } from '../message.service';
import { DynamicAnchorDirective } from '../dynamic-anchor.directive';
import * as x from 'uuid';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MessagesComponent implements OnInit {
  id: string;
  @Input() template;
  @Input() dataContext;
  constructor(public messageService: MessageService) {}

  ngOnInit() {
    this.id = x();
  }
}
