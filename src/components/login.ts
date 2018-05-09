import { Router } from 'aurelia-router';
import { inject } from 'aurelia-framework';
import { AuthenService } from './../services/authen.service';
import {DialogService} from 'aurelia-dialog';
import {User} from 'models/user';
import {  DialogMessage,} from './dialog-message';

@inject(AuthenService, Router, DialogService)
export class Login {
  
  userLogin!: User;

  constructor(private authenService: AuthenService, 
    private router: Router, 
    public dialogService: DialogService
  ){
  }

  
  created() {
    this.authenService.logout();
  }

  login() {
    console.log('userLogin', this.userLogin);
     this.authenService.login(this.userLogin.email, this.userLogin.password)
     .then((response) => {
        if(response){
          this.router.navigate('star-wars');
        }
        else {
          this.showError();
        }
     })
  }

  showError() {
    this.dialogService.open({
      viewModel: DialogMessage, 
      model: {type: 'error', text: 'Login error, email or password is incorrect!'}
    })
    .whenClosed(response => {
      if (!response.wasCancelled) {
        console.log('OK');
      } else {
        console.log('Cancel');
      }
      console.log(response.output);
    });
  }
}
