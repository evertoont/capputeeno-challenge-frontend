"use client";

import { useFilter } from "@/hooks/useFilter";
import { FilterByPriority } from "../FilterByPriority";
import { FilterByType } from "../FilterByType";
import { Pagination } from "../Pagination";
import { FilterContainer, FilterPrimaryWrapper } from "./styles";

export function FilterBar() {
  const { activeFilterByType, searchProduct } = useFilter();

  const showPagination = !activeFilterByType && !searchProduct;

  return (
    <FilterContainer>
      <FilterPrimaryWrapper>
        <FilterByType />
        <FilterByPriority />
      </FilterPrimaryWrapper>

      {showPagination && <Pagination />}
    </FilterContainer>
  );
}
