import { Component, OnInit } from '@angular/core';

import { UserService }       from './model/user.service';

@Component({
  selector: 'app-welcome',
  template: '<h3 class="welcome" ><i>{{welcome}}</i></h3>'
})
export class WelcomeComponent  implements OnInit {
  welcome = '-- not initialized yet --';
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser()
      .then(user => this.welcome = user.name);
  }
}
