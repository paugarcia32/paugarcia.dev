// /src/components/SearchAndFilterBar.tsx
import React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tags } from "lucide-react";

interface SearchAndFilterBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedFilter: string | undefined;
  setSelectedFilter: (value: string | undefined) => void;
  allFilters: string[];
  placeholder: string;
  filterPlaceholder: string;
}

const SearchAndFilterBar: React.FC<SearchAndFilterBarProps> = ({
  searchTerm,
  setSearchTerm,
  selectedFilter,
  setSelectedFilter,
  allFilters,
  placeholder,
  filterPlaceholder,
}) => {
  const handleFilterChange = (value: string) => {
    setSelectedFilter(value === "" ? undefined : value);
  };

  return (
    <div className="flex justify-center items-center mb-4 space-x-2 border rounded-md shadow-sm">
      <Input
        className="flex-grow max-w-xl border-none"
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="m-1 pr-1">
        <Select value={selectedFilter || ""} onValueChange={handleFilterChange}>
          <SelectTrigger className="w-32 border-none dark:bg-zinc-900 bg-zinc-300 hover:bg-zinc-400 dark:hover:bg-zinc-800">
            <Tags className="text-primary" />
            <SelectValue placeholder={filterPlaceholder} />
          </SelectTrigger>
          <SelectContent>
            {allFilters.map((filter) => (
              <SelectItem key={filter} value={filter}>
                {filter}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SearchAndFilterBar;
