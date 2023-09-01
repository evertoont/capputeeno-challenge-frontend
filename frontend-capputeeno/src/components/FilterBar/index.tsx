'use client'

import { FilterByType } from "../FilterByType";
import { FilterContainer } from "./styles";

export function FilterBar() {
  return (
    <FilterContainer>
      <FilterByType />
    </FilterContainer>
  )
}