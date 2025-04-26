'use client';
import { useState } from 'react';
import { useRecipes } from '../../hooks/useRecipes';
import { FilterParams } from '../../types';
import { EmptyState, ErrorState, LoadingState } from '../state/RecipeState';
import { RecipesGrid } from './RecipeGrid';
import { FiltersPanel } from '../filters/FiltersPanel';

export const RecipeList = () => {
  const [filters, setFilters] = useState<FilterParams>({
    ingredient: '',
    category: '',
    country: '',
  });
  const [activeFilters, setActiveFilters] = useState<FilterParams>({});
  const { data, isLoading, error } = useRecipes(activeFilters);

  const handleFilterChange = (key: keyof FilterParams, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const applyFilters = () => {
    setActiveFilters(filters);
  };

  const resetFilters = () => {
    setFilters({ ingredient: '', category: '', country: '' });
    setActiveFilters({});
  };

  return (
    <div className="space-y-8 p-6">
      <FiltersPanel
        filters={filters}
        onFilterChange={handleFilterChange}
        onApplyFilters={applyFilters}
        onResetFilters={resetFilters}
      />

      {isLoading ? (
        <LoadingState />
      ) : error ? (
        <ErrorState />
      ) : data && data.length > 0 ? (
        <RecipesGrid recipes={data} />
      ) : (
        <EmptyState />
      )}
    </div>
  );
};
