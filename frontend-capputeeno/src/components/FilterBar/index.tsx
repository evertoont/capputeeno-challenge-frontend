"use client";

import { FilterByPriority } from "../FilterByPriority";
import { FilterByType } from "../FilterByType";
import { FilterContainer } from "./styles";

export function FilterBar() {
  return (
    <FilterContainer>
      <FilterByType />
      <FilterByPriority />
    </FilterContainer>
  );
}
