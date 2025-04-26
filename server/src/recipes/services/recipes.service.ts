import { Injectable } from "@nestjs/common";
import { MealDbService } from "./meal-db.service";

@Injectable()
export class RecipesService {
  constructor(private readonly mealDb: MealDbService) {}

  async getAll() {
    return this.mealDb.fetchAll();
  }

  async filterByIngredient(ingredient: string) {
    return this.mealDb.filterBy("i", ingredient);
  }

  async filterByCategory(category: string) {
    return this.mealDb.filterBy("c", category);
  }

  async filterByCountry(country: string) {
    return this.mealDb.filterBy("a", country);
  }

  async getById(id: string) {
    return this.mealDb.getById(id);
  }
}
