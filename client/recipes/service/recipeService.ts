import axios, { AxiosInstance } from 'axios';
import { FilterParams, Recipe, RecipeDetails } from '../types';

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const apiClient: AxiosInstance = axios.create({
  baseURL: apiBaseUrl,
});

export const recipeService = {
  getRecipes: async (params: FilterParams): Promise<Recipe[]> => {
    const response = await apiClient.get<Recipe[]>('/recipes', {
      params,
    });
    return response.data;
  },

  getById: async (id: string): Promise<RecipeDetails | null> => {
    const response = await apiClient.get<RecipeDetails | null>(
      `/recipes/${id}`,
    );
    return response.data;
  },
};
