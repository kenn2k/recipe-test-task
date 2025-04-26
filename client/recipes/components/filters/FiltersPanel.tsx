'use client';
import { FilterInput } from './FilterInput';
import { FilterParams } from '../../types';

type FiltersPanelProps = {
  filters: FilterParams;
  onFilterChange: (key: keyof FilterParams, value: string) => void;
  onApplyFilters: () => void;
  onResetFilters: () => void;
};

export const FiltersPanel = ({
  filters,
  onFilterChange,
  onApplyFilters,
  onResetFilters,
}: FiltersPanelProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FilterInput
          id="ingredient"
          label="Ingredient"
          value={filters.ingredient}
          onChange={(value) => onFilterChange('ingredient', value)}
          placeholder="Example: chicken"
        />
        <FilterInput
          id="category"
          label="Category"
          value={filters.category}
          onChange={(value) => onFilterChange('category', value)}
          placeholder="Example: dessert"
        />
        <FilterInput
          id="country"
          label="Country"
          value={filters.country}
          onChange={(value) => onFilterChange('country', value)}
          placeholder="Example: Italian"
        />
      </div>
      <div className="flex gap-2 mt-4">
        <button
          onClick={onApplyFilters}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Apply Filters
        </button>
        <button
          onClick={onResetFilters}
          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
};
