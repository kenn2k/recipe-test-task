import Image from 'next/image';
import { Recipe } from '../../types';
import Link from 'next/link';

interface RecipeCardProps {
  recipe: Recipe;
}

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col transition-all duration-200 hover:shadow-lg">
      <div className="relative h-48 w-full">
        <Image
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4 pb-2">
        <h3 className="font-semibold text-lg line-clamp-2">{recipe.strMeal}</h3>
      </div>
      <div className="p-4 pt-0 flex-grow">
        <p className="text-sm text-gray-500">ID: {recipe.idMeal}</p>
      </div>
      <div className="p-4 pt-0">
        <Link href={`/recipes/${recipe.idMeal}`} className="w-full block">
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors flex items-center justify-center">
            View Recipe
          </button>
        </Link>
      </div>
    </div>
  );
};
