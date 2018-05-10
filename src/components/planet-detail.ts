import { autoinject } from 'aurelia-framework';
import { PlanetsService } from '../services/planets.service';
import {Planet } from   '../models/planet';

@autoinject
export class PlanetDetail {
  private planetObject: Planet;
  constructor(private planetsService: PlanetsService) { }

  private async activate(params, routeConfig): Promise<void> {
    this.planetObject = await this.planetsService.getPlanet(params.id);
    routeConfig.navModel.setTitle(this.planetObject.name);
  }
}
