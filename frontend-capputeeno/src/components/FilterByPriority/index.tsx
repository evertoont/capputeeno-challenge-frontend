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

export function FilterByPriority() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleOpenFilter = () => {
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
              <FilterOption onClick={handleOpenFilter} key={item.type}>
                {item.label}
              </FilterOption>
            );
          })}
        </FilterWrapperOptions>
      )}
    </FilterContainerPriority>
  );
}
