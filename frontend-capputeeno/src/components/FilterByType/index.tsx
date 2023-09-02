"use client";

import { filterItemsByType } from "@/utils/filters";
import { FilterItem, FilterList } from "./styles";
import { useState } from "react";
import { FilterTypes } from "@/types/filters";
import { useFilter } from "@/hooks/useFilter";

export function FilterByType() {
  const { activeFilterByType, setActiveFilterByType, searchProduct } =
    useFilter();

  const handleSelectFilter = (typeValue: FilterTypes) => {
    setActiveFilterByType(typeValue);
  };

  return (
    <FilterList>
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
