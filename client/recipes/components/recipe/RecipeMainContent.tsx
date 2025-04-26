import Image from 'next/image';
import Link from 'next/link';
import { RecipeDetails } from '../../types';

interface RecipeMainContentProps {
  meal: RecipeDetails;
}

export const RecipeMainContent = ({ meal }: RecipeMainContentProps) => {
  return (
    <main className="flex-1 p-6">
      <div className="flex items-start space-x-6">
        <Image
          src={meal.strMealThumb}
          alt={meal.strMeal}
          width={400}
          height={400}
          className="rounded-lg"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{meal.strMeal}</h1>
          <Link
            href={`/recipes?country=${meal.strArea}`}
            className="text-blue-600 hover:underline"
          >
            {meal.strArea}
          </Link>
        </div>
      </div>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <p>{meal.strInstructions}</p>
      </section>
    </main>
  );
};
