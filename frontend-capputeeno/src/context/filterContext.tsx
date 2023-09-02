"use client";

import { FilterTypes, PriorityTypes } from "@/types/filters";
import { createContext, useState } from "react";

interface FilterContextProps {
  children: React.ReactNode;
}

export const FilterContext = createContext({
  activeFilterByType: FilterTypes.ALL,
  activeFilterByPriority: PriorityTypes.POPULARITY,
  setActiveFilterByType: (filter: FilterTypes) => {},
  setActiveFilterByPriority: (filter: PriorityTypes) => {},
  searchProduct: "",
  setSearchProduct: (search: string) => {},
});

export function FilterContextProvider({ children }: FilterContextProps) {
  const [activeFilterByType, setActiveFilterByType] = useState(FilterTypes.ALL);
  const [activeFilterByPriority, setActiveFilterByPriority] = useState(
    PriorityTypes.POPULARITY
  );
  const [searchProduct, setSearchProduct] = useState("");

  return (
    <FilterContext.Provider
      value={{
        activeFilterByType,
        activeFilterByPriority,
        setActiveFilterByType,
        setActiveFilterByPriority,
        searchProduct,
        setSearchProduct,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
