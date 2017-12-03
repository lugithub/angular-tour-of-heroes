import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heroes';
  theme = 'theme-light';

  changeTheme() {
    this.theme =
    this.theme === 'theme-light' ? 'theme-dark' : 'theme-light';
  }

}
