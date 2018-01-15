import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  isLoggedIn = false;
  user = {name: 'a user'};
  getUser() {
    return Promise.resolve({name: 'async user'});
  }
}
