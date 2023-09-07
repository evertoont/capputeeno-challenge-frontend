import { useQuery } from "react-query";
import { useFilter } from "./useFilter";
import { fetchData } from "@/modules/resource";
import { mountQueryFilters } from "@/modules/mountQueryFilters";
import { useDeferredValue } from "react";

export function useProducts() {
  const { searchProduct, activeFilterByType } = useFilter();
  const query = mountQueryFilters(activeFilterByType);
  const searchProductDeferred = useDeferredValue(searchProduct);
  const { data, isLoading } = useQuery({
    queryFn: () => fetchData(query),
    queryKey: ["products", activeFilterByType],
    staleTime: 1000 * 60 * 1,
  });

  const allProducts = data?.data?.allProducts;
  const filteredData = allProducts?.filter((product) => {
    return product.name
      .toLowerCase()
      .includes(searchProductDeferred.toLowerCase());
  });

  return {
    data: filteredData,
    isLoading,
  };
}
