import { useQuery } from '@tanstack/react-query';
import { recipeService } from '../service/recipeService';
import { RecipeDetails } from '../types';

export const useSingleRecipe = (recipeId: string) => {
  return useQuery<RecipeDetails | null, Error>({
    queryKey: ['recipe', recipeId],
    queryFn: () => recipeService.getById(recipeId),
  });
};
