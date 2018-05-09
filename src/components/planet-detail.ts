import { inject } from 'aurelia-framework';
import { PlanetsService } from '../services/planets.service';
import {Planet } from   '../models/planet';

@inject(PlanetsService)
export class PlanetDetail {
  planetObject: Planet;
  constructor(
    private planetsService: PlanetsService
  ) { }

  public async activate(params, routeConfig): Promise<void> {
    this.planetObject = await this.planetsService.getPlanet(params.id);
    routeConfig.navModel.setTitle(this.planetObject.name);
  }
}
