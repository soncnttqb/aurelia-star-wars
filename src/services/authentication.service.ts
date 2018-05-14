
import {autoinject} from 'aurelia-framework';
import {UserAPI} from './user-api';
import {User} from '../models/user';
import { Constants} from '../utils/constants';

@autoinject
export class AuthenticationService {

  constructor(private userApi: UserAPI, private constants: Constants) {}

  public async login(email: string, password: string): Promise<User> {
    return this.userApi.login(email, password).then(response => {
      if (response) {
        localStorage.setItem(this.constants.CurrentUser, JSON.stringify(response));
        localStorage.setItem(this.constants.IsAuthentication, 'true');
      }
      return response;
    });
  }

  public async logout(): Promise<void> {
    localStorage.removeItem(this.constants.CurrentUser);
    localStorage.removeItem(this.constants.IsAuthentication);
    localStorage.removeItem(this.constants.IsRememberMe);
  }

  public async getUserById(id: number): Promise<User> {
    return this.userApi.getUserById(id).then(response => {
      return response;
    });
  }

}
