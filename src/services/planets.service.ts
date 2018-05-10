import { autoinject } from 'aurelia-framework';
import { RestClient } from './rest-client.service';
import {SearchObject} from '../models/searchObject';
import { plainToClass } from 'class-transformer';
import {Planet}  from '../models/planet';


@autoinject
export class PlanetsService {
  constructor(
    private restClient: RestClient,
  ) {
    this.restClient
      .useAPI()
      .withResource('planets');
  }

  public async getPlanets(): Promise<SearchObject> {
    const searchObject = await this.restClient.findAll<SearchObject>();
    return searchObject;
  }

  public async getPlanet(id: number): Promise<Planet> {
    const planet = await this.restClient.findOne<Planet>(id);
    return planet;
  }
}
