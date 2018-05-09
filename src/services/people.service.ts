import { inject } from 'aurelia-framework';
import { RestClient } from './rest-client.service';
import {People}  from '../models/people';
import {SearchObject} from '../models/searchObject';
import { plainToClass } from 'class-transformer';


@inject(RestClient)
export class PeopleService {
  constructor(
    private restClient: RestClient,
  ) {
    this.restClient
      .useAPI()
      .withResource('people');
  }

  public async getPeople(): Promise<SearchObject> {
    const searchObject = await this.restClient.findAll<SearchObject>();
    return searchObject;
  }

  public async getPeopleDetail(id: number): Promise<People> {
    const people = await this.restClient.findOne<People>(id);
    return people;
  }
}
