export interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory?: string;
  strArea?: string;
  strInstructions?: string;
}

export interface MealApiResponse {
  meals: Meal[] | null;
}

export interface AxiosMealResponse {
  data: MealApiResponse;
}

export interface FilterParams {
  i?: string;
  c?: string;
  a?: string;
}
