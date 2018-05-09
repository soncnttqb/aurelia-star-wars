
import { inject } from 'aurelia-framework';
import { PeopleService } from '../services/people.service';
import {People } from   '../models/people';

@inject(PeopleService)
export class PeopleDetail {
  peopleObject: People;
  constructor(
    private peopleService: PeopleService
  ) { }

  public async activate(params, routeConfig): Promise<void> {
    this.peopleObject = await this.peopleService.getPeopleDetail(params.id);
    routeConfig.navModel.setTitle(this.peopleObject.name);
  }
}
