"use client";

import { FilterTypes, PriorityTypes } from "@/types/filters";
import { createContext, useState } from "react";

interface FilterContextProps {
  children: React.ReactNode;
}

export const FilterContext = createContext({
  activeFilterByPriority: PriorityTypes.POPULARITY,
  activeFilterByType: FilterTypes.ALL,
  searchProduct: "",
  setActiveFilterByPriority: (filter: PriorityTypes) => {},
  setActiveFilterByType: (filter: FilterTypes) => {},
  setSearchProduct: (search: string) => {},
  page: 0,
  setPage: (page: number) => {},
  perPage: 10,
  setPerPage: (perPage: number) => {},
});

export function FilterContextProvider({ children }: FilterContextProps) {
  const [activeFilterByType, setActiveFilterByType] = useState(FilterTypes.ALL);
  const [activeFilterByPriority, setActiveFilterByPriority] = useState(
    PriorityTypes.POPULARITY
  );
  const [searchProduct, setSearchProduct] = useState("");
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(10);

  return (
    <FilterContext.Provider
      value={{
        activeFilterByType,
        activeFilterByPriority,
        setActiveFilterByType,
        setActiveFilterByPriority,
        searchProduct,
        setSearchProduct,
        page,
        setPage,
        perPage,
        setPerPage,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
