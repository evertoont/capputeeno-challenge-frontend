"use client";

import { useFilter } from "@/hooks/useFilter";
import { FilterByPriority } from "../FilterByPriority";
import { FilterByType } from "../FilterByType";
import { Pagination } from "../Pagination";
import { FilterContainer, FilterPrimaryWrapper } from "./styles";
import { useProducts } from "@/hooks/useProducts";

export function FilterBar() {
  const { activeFilterByType, searchProduct } = useFilter();
  const { isError } = useProducts();

  const showPagination = !activeFilterByType && !searchProduct && !isError;

  return (
    <FilterContainer data-testid="FilterBar">
      <FilterPrimaryWrapper>
        <FilterByType />
        <FilterByPriority />
      </FilterPrimaryWrapper>

      {showPagination && <Pagination />}
    </FilterContainer>
  );
}
