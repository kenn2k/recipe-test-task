import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
      <h1>Hello! Click on the Link below and review difference recipes</h1>
      <Link
        href="/recipes"
        className="inline-block rounded-md bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm transition duration-150 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        View Recipes
      </Link>
    </div>
  );
}
