import { Router } from 'aurelia-router';
import { autoinject } from 'aurelia-framework';
import { AuthenticationService } from './../services/authentication.service';
import {DialogService} from 'aurelia-dialog';
import {User} from 'models/user';
import {  DialogMessage} from './dialog-message';
import { Constants} from '../utils/constants';

@autoinject
export class Login {

  private userLogin!: User;
  private isRememberMe: boolean = false;

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              public dialogService: DialogService,
              private constants: Constants
  ) {
  }

  private created(): void {
    const currentUser = localStorage.getItem(this.constants.CurrentUser);
    const isRememberMe = localStorage.getItem(this.constants.IsRememberMe);
    if (isRememberMe) {
      this.isRememberMe = true;
      const user = JSON.parse(currentUser);
      this.authenticationService.getUserById(user.id).then(res => {
        this.userLogin = new User(res.id, res.email);
        this.userLogin.password = res.password;
      }).catch(error => {});
    }
    this.authenticationService.logout();
  }

  private login(): void {
     this.authenticationService.login(this.userLogin.email, this.userLogin.password)
     .then(response => {
        if (response) {
          if (this.isRememberMe) {
            localStorage.setItem(this.constants.IsRememberMe, 'true');
          } else {
            localStorage.setItem(this.constants.IsRememberMe, '');
          }
          this.router.navigate('star-wars');
        } else {
          this.showError();
        }
     });
  }

  private showError(): void {
    this.dialogService.open({
      viewModel: DialogMessage,
      model: {type: 'error', text: 'Login error, email or password is incorrect!'}
    })
    .whenClosed(response => {
      // if (!response.wasCancelled) {
      // } else {
      // }
    });
  }
}
