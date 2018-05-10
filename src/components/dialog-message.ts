import {autoinject} from 'aurelia-framework';
import {DialogController} from 'aurelia-dialog';

@autoinject
export class DialogMessage {
  private message: object;

  constructor(private controller: DialogController) {
  }

  private activate(model): void {
    this.message = model;
  }
}
