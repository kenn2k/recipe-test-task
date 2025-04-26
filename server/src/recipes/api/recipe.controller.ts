import { Controller, Get, Query } from "@nestjs/common";
import { RecipesService } from "../services/recipes.service";

@Controller("recipes")
export class RecipesController {
  constructor(private readonly service: RecipesService) {}

  @Get()
  async getAll() {
    return this.service.getAll();
  }

  @Get("filter")
  async filter(
    @Query("ingredient") ingredient?: string,
    @Query("category") category?: string,
    @Query("country") country?: string,
  ) {
    if (ingredient) return this.service.filterByIngredient(ingredient);
    if (category) return this.service.filterByCategory(category);
    if (country) return this.service.filterByCountry(country);
    return this.service.getAll();
  }

  @Get(":id")
  async getById(@Query("id") id: string) {
    return this.service.getById(id);
  }
}
