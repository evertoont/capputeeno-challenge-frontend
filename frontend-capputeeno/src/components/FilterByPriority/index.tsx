"use client";

import { useState } from "react";
import { ArrowIcon } from "../icons/arrow";
import {
  FilterContainerPriority,
  FilterOption,
  FilterWrapperOptions,
  MainButtonSelected,
} from "./styles";
import { priorityFilterItems } from "@/utils/filters";
import { useFilter } from "@/hooks/useFilter";
import { PriorityTypes } from "@/types/filters";

export function FilterByPriority() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { setActiveFilterByPriority, activeFilterByPriority } = useFilter();

  const handleOpenFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleUpdateFilterPriority = (priorityValue: PriorityTypes) => {
    setActiveFilterByPriority(priorityValue);
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <FilterContainerPriority>
      <MainButtonSelected onClick={handleOpenFilter}>
        Organizar por
        <ArrowIcon />
      </MainButtonSelected>

      {isFilterOpen && (
        <FilterWrapperOptions>
          {priorityFilterItems.map((item) => {
            return (
              <FilterOption
                onClick={() => handleUpdateFilterPriority(item.type)}
                key={item.type}
                isActive={item.type === activeFilterByPriority}
              >
                {item.label}
              </FilterOption>
            );
          })}
        </FilterWrapperOptions>
      )}
    </FilterContainerPriority>
  );
}
