"use client";

import { filterItemsByType } from "@/utils/filters";
import { FilterItem, FilterList } from "./styles";
import { FilterTypes } from "@/types/filters";
import { useFilter } from "@/hooks/useFilter";
import { useProducts } from "@/hooks/useProducts";

export function FilterByType() {
  const { activeFilterByType, setActiveFilterByType, setPage, setPerPage } =
    useFilter();
  const { totalProducts } = useProducts();

  const handleSelectFilter = (typeValue: FilterTypes) => {
    if (typeValue && totalProducts) {
      setPage(0);
      setPerPage(totalProducts);
    } else {
      setPage(0);
      setPerPage(10);
    }

    setActiveFilterByType(typeValue);
  };

  return (
    <FilterList data-testid="FilterByType">
      {filterItemsByType.map((item) => {
        return (
          <FilterItem
            onClick={() => handleSelectFilter(item.type)}
            key={item.type}
            isActive={activeFilterByType === item.type}
          >
            {item.label}
          </FilterItem>
        );
      })}
    </FilterList>
  );
}
