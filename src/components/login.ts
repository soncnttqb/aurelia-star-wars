import { Router } from 'aurelia-router';
import { autoinject } from 'aurelia-framework';
import { AuthenticationService } from './../services/authentication.service';
import {DialogService} from 'aurelia-dialog';
import {User} from 'models/user';
import {  DialogMessage,} from './dialog-message';

@autoinject
export class Login {
  
  private userLogin!: User;

  constructor(private authenticationService: AuthenticationService, 
    private router: Router, 
    public dialogService: DialogService
  ){
  }

  
  private created() : void {
    this.authenticationService.logout()
    .then(()=> {
    })
    .catch((error)=> {
    });
  }

  private login() : void {
     this.authenticationService.login(this.userLogin.email, this.userLogin.password)
     .then((response) => {
        if(response){
          this.router.navigate('star-wars');
        }
        else {
          this.showError();
        }
     })
  }

  private showError() : void {
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
