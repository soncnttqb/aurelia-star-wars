// import { RequestInit } from 'aurelia-fetch-client';

import { inject, bindable } from 'aurelia-framework';
import { PeopleService } from '../services/people.service';
import { PlanetsService } from '../services/planets.service';
import { StarshipsService } from '../services/starships.service';
import { SearchObject } from './../models/searchObject';

export interface ICategory {
  id: number;
  name: string;
}

@inject(PeopleService, PlanetsService, StarshipsService)
export class StarWars {

   current_user: string;
   @bindable searchTerm = "";

   public searchObject: SearchObject;
   public selectedCategory: ICategory;

   categories: ICategory[] = [
    { id: 1, name: 'People' },
    { id: 2, name: 'Planets' },
    { id: 3, name: 'Starships' },
   ]

   constructor(
    private peopleService: PeopleService,
    private planetsService: PlanetsService,
    private starshipsService: StarshipsService
  ) { }

  public async activate(): Promise<void> {
    this.selectedCategory = { id: 1, name: 'People' };
    this.searchObject = await this.peopleService.getPeople();
  }

  public selectedCategoryChanged(): void {
      this.getListByCategory();
  }

  public async getListByCategory() {
    switch (this.selectedCategory.id) {
      case 1: {
        this.searchObject = await this.peopleService.getPeople();
        break;
      }
      case 2: {
        this.searchObject = await this.planetsService.getPlanets();
        break;
      }
      case 3: {
        this.searchObject = await this.starshipsService.getStarships();
        break;
      }
    }
  }

  getId(item): number {
    let arr = item.url.split('/');
    arr = arr.filter((e) => { return e.length > 0});
    return parseInt(arr[arr.length - 1], 10);
  }

  filterFunc(searchExpression, item, categoryId): boolean{
     
    // if(!searchExpression || !itemValue) return false;
    
    // return itemValue.toUpperCase().indexOf(searchExpression.toUpperCase()) !== -1;

    // return item.name.toUpperCase().indexOf(searchExpression.toUpperCase()) !==-1;
    switch (categoryId) {
      case 1: {
        return (item.name && item.name.toUpperCase().indexOf(searchExpression.toUpperCase()) !==-1)
        || (item.gender && item.gender.toUpperCase().indexOf(searchExpression.toUpperCase()) !==-1)
        || (item.eye_color && item.eye_color.toUpperCase().indexOf(searchExpression.toUpperCase()) !==-1);
      }
      case 2: {
        return (item.name && item.name.toUpperCase().indexOf(searchExpression.toUpperCase()) !==-1)
        || (item.climate && item.climate.toUpperCase().indexOf(searchExpression.toUpperCase()) !==-1)
        || (item.gravity && item.gravity.toUpperCase().indexOf(searchExpression.toUpperCase()) !==-1);
      }
      case 3: {
        return (item.name && item.name.toUpperCase().indexOf(searchExpression.toUpperCase()) !==-1)
        || (item.model && item.model.toUpperCase().indexOf(searchExpression.toUpperCase()) !==-1)
        || (item.manufacturer && item.manufacturer.toUpperCase().indexOf(searchExpression.toUpperCase()) !==-1);
      }
    }
    
  }
}
