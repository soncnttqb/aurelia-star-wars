
import {autoinject} from 'aurelia-framework';
import {UserAPI} from './user-api';
import {User} from '../models/user';

@autoinject
export class AuthenticationService {

  constructor(private userApi: UserAPI) {}

  public async login(email: string, password: string) : Promise<User> {
    return this.userApi.login(email, password).then((response) => {
      if(response) {
        localStorage.setItem('currentUser', JSON.stringify(response));
        localStorage.setItem('isAuthentication', 'true');
      }
      return response;
    })
  }

  public async logout() : Promise<void>{
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isAuthentication');
  }

}
