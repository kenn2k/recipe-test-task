import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { RecipesModule } from "../recipes/recipes.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
      validationOptions: {
        allowUnknown: true,
        abortEarly: false,
      },
    }),
    RecipesModule,
  ],
})
export class AppModule {}
