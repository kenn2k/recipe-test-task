import { Module } from "@nestjs/common";
import { RecipesController } from "./api/recipe.controller";
import { RecipesService } from "./services/recipes.service";
import { MealDbService } from "./services/meal-db.service";

@Module({
  controllers: [RecipesController],
  providers: [RecipesService, MealDbService],
})
export class RecipeModule {}
