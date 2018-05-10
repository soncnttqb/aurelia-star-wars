import { autoinject } from 'aurelia-framework';
import { RestClient } from './rest-client.service';
import {SearchObject} from '../models/searchObject';
import { plainToClass } from 'class-transformer';
import {StarShip} from '../models/starship';


@autoinject
export class StarshipsService {
  constructor(
    private restClient: RestClient,
  ) {
    this.restClient
      .useAPI()
      .withResource('starships');
  }

  public async getStarships(): Promise<SearchObject> {
    const searchObject = await this.restClient.findAll<SearchObject>();
    return searchObject;
  }

  public async getStarship(id: number): Promise<StarShip> {
    const starShip = await this.restClient.findOne<StarShip>(id);
    return starShip;
  }
}
