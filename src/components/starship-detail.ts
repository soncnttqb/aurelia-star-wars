import { inject } from 'aurelia-framework';
import { StarshipsService } from '../services/starships.service';
import {StarShip } from   '../models/starship';

@inject(StarshipsService)
export class PlanetDetail {
  starShipObject: StarShip;
  constructor(
    private starshipsService: StarshipsService
  ) { }

  public async activate(params, routeConfig): Promise<void> {
    this.starShipObject = await this.starshipsService.getStarship(params.id);
    routeConfig.navModel.setTitle(this.starShipObject.name);
  }
}
