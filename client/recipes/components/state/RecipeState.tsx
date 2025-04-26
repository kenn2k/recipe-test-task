'use client';

export const LoadingState = () => {
  return (
    <div className="flex justify-center items-center py-12">
      <span className="ml-2">Loading recipes...</span>
    </div>
  );
};

export const ErrorState = () => {
  return (
    <div className="bg-red-50 p-4 rounded-md text-red-600">
      An error occurred while loading recipes. Please try again later.
    </div>
  );
};

export const EmptyState = () => {
  return (
    <div className="text-center py-12 bg-gray-50 rounded-lg">
      <p className="text-lg text-gray-600">
        No recipes found. Try changing your filter parameters.
      </p>
    </div>
  );
};
