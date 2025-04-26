import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { RecipeModule } from './recipe/recipe.module';

@Module({
  imports: [ConfigModule.forRoot(), RecipeModule],
})
export class AppModule {}
