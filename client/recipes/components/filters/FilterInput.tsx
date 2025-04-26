'use client';

type FilterInputProps = {
  id: string;
  label: string;
  value: string | undefined;
  onChange: (value: string) => void;
  placeholder: string;
};

export const FilterInput = ({
  id,
  label,
  value,
  onChange,
  placeholder,
}: FilterInputProps) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};
