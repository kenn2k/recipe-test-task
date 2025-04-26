'use client';
import { useRecipes } from '@/recipes/hooks/useRecipes';
import Image from 'next/image';
import Link from 'next/link';

interface RecipeSidebarProps {
  category: string;
}

export const RecipeSidebar = ({ category }: RecipeSidebarProps) => {
  const { data: sidebarMeals, isLoading: sidebarLoading } = useRecipes({
    category,
  });

  return (
    <aside className="w-1/4 p-6 bg-gray-50">
      <h2 className="text-xl font-semibold mb-4">More in {category}</h2>

      {sidebarLoading ? (
        <p>Loading sidebar…</p>
      ) : (
        <ul className="space-y-3">
          {sidebarMeals?.map((sbMeal) => (
            <li key={sbMeal.idMeal}>
              <Link
                href={`/recipes/${sbMeal.idMeal}`}
                className="flex items-center space-x-2 hover:underline"
              >
                <Image
                  src={sbMeal.strMealThumb}
                  alt={sbMeal.strMeal}
                  width={40}
                  height={40}
                  className="rounded-md"
                />
                <span>{sbMeal.strMeal}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
};
