
import { autoinject } from 'aurelia-framework';
import { PeopleService } from '../services/people.service';
import {People } from   '../models/people';

@autoinject
export class PeopleDetail {
  private peopleObject: People;
  constructor(private peopleService: PeopleService) { }

  private async activate(params, routeConfig): Promise<void> {
    this.peopleObject = await this.peopleService.getPeopleDetail(params.id);
    routeConfig.navModel.setTitle(this.peopleObject.name);
  }
}
