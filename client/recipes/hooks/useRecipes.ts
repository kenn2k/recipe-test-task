import { useQuery } from '@tanstack/react-query';
import { recipeService } from '../service/recipeService';
import { FilterParams, Recipe } from '../types';

export const useRecipes = (params: FilterParams) => {
  return useQuery<Recipe[]>({
    queryKey: ['recipes', params],
    queryFn: () => {
      return recipeService.getRecipes(params);
    },
  });
};
