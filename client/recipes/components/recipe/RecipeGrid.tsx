import { Recipe } from '../../types';
import { RecipeCard } from './RecipeCard';

type RecipesGridProps = {
  recipes: Recipe[];
};

export const RecipesGrid = ({ recipes }: RecipesGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} />
      ))}
    </div>
  );
};
