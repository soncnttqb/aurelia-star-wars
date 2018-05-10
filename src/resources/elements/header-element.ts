export class HeaderElementCustomElement {
  private current_user: string;
  constructor() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.current_user = currentUser.email;
  }
}
