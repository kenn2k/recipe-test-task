import { Controller, Get, Param, Query } from "@nestjs/common";
import { RecipesService } from "../services/recipes.service";
import { FilterParams } from "../interfaces/meal.interface";

@Controller("recipes")
export class RecipesController {
  constructor(private readonly recipeService: RecipesService) {}

  @Get()
  async getRecipes(
    @Query("ingredient") ingredient?: string,
    @Query("category") category?: string,
    @Query("country") country?: string,
  ) {
    const params: FilterParams = {};

    if (ingredient) {
      params.i = ingredient;
    }
    if (category) {
      params.c = category;
    }
    if (country) {
      params.a = country;
    }

    if (Object.keys(params).length !== 0) {
      return this.recipeService.filterBy(params);
    }

    return this.recipeService.getAll();
  }

  @Get(":id")
  async getById(@Param("id") id: string) {
    return this.recipeService.getById(id);
  }
}
