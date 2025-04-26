'use client';
import { useSingleRecipe } from '@/recipes/hooks/useRecipeById';
import { RecipeSidebar } from './RecipeSidebar';
import { RecipeMainContent } from './RecipeMainContent';

interface RecipePageProps {
  idMeal: string;
}

export default function RecipePageContent({ idMeal }: RecipePageProps) {
  const {
    data: meal,
    isLoading: mealLoading,
    error: mealError,
  } = useSingleRecipe(idMeal);

  if (mealLoading) return <p>Loading recipe…</p>;
  if (mealError) return <p>Error: {mealError.message}</p>;
  if (!meal) return <p>Recipe not found</p>;

  return (
    <div className="flex">
      <RecipeMainContent meal={meal} />
      <RecipeSidebar category={meal.strCategory} />
    </div>
  );
}
