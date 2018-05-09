
import {inject} from 'aurelia-framework';
import {UserAPI} from 'utils/user-api';

@inject(UserAPI)
export class AuthenService {

  constructor(private userApi: UserAPI) {
    
  }
  login(email: string, password: string) {
    return this.userApi.login(email, password).then((response) => {
      if(response){
          localStorage.setItem('currentUser', JSON.stringify(response));
          localStorage.setItem('isAuthen', 'true');
      }
      return response;
    })
    .catch((error) => {
      console.log(error);
    })
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isAuthen');
  }

}
