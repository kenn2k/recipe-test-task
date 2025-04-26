export interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export interface FilterParams {
  ingredient?: string;
  category?: string;
  country?: string;
}

export interface RecipeDetails {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
}
