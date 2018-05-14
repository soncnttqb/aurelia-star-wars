import { AuthenticationService } from '../../services/authentication.service';
import { Router } from 'aurelia-router';
import { autoinject } from 'aurelia-framework';
import { DialogMessage} from '../../components/dialog-message';
import {DialogService} from 'aurelia-dialog';
import { Constants} from '../../utils/constants';

@autoinject
export class HeaderElementCustomElement {
  private current_user: string;
  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private dialogService: DialogService,
              private constants: Constants) {
    const currentUser = JSON.parse(localStorage.getItem(this.constants.CurrentUser));
    this.current_user = currentUser.email;
  }

  public logout(): void {
    this.authenticationService.logout()
    .then(() => {
      this.router.navigate('login');
    })
    .catch(error => {
      this.dialogService.open({
        viewModel: DialogMessage,
        model: {type: 'error', text: 'logout error!'}
      });
    });
  }
}
