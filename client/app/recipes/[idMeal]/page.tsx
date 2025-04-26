import RecipePageContent from '@/recipes/components/recipe/RecipePageContent';
interface RecipePageProps {
  params: {
    idMeal: string;
  };
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { idMeal } = await params;
  return <RecipePageContent idMeal={idMeal} />;
}
