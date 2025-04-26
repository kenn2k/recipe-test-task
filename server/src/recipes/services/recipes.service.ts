import { Injectable } from "@nestjs/common";
import { MealDbService } from "./meal-db.service";
import { FilterParams } from "../interfaces/meal.interface";

@Injectable()
export class RecipesService {
  constructor(private readonly mealDbService: MealDbService) {}

  async getAll() {
    return this.mealDbService.fetchAll();
  }

  async filterBy(params: FilterParams) {
    return this.mealDbService.filterBy(params);
  }

  async getById(id: string) {
    return this.mealDbService.getById(id);
  }
}
