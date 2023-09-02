"use client";

import { filterItems } from "@/utils/filters";
import { FilterItem, FilterList } from "./styles";
import { useState } from "react";
import { FilterType } from "@/types/filters";

export function FilterByType() {
  const [activeFilter, setActiveFilter] = useState(FilterType.ALL);

  const handleSelectFilter = (value: FilterType) => {
    setActiveFilter(value);
  };

  return (
    <FilterList>
      {filterItems.map((item) => {
        return (
          <FilterItem
            onClick={() => handleSelectFilter(item.type)}
            key={item.type}
            isActive={activeFilter === item.type}
          >
            {item.label}
          </FilterItem>
        );
      })}
    </FilterList>
  );
}
