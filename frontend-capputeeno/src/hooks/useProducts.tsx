import { useQuery } from "react-query";
import { useFilter } from "./useFilter";
import { fetchData } from "@/modules/resource";
import { mountQueryFilters } from "@/modules/queryFilters";
import { useDeferredValue } from "react";

export function useProducts() {
  const { searchProduct, activeFilterByType, activeFilterByPriority } =
    useFilter();
  const searchProductDeferred = useDeferredValue(searchProduct);
  const query = mountQueryFilters(activeFilterByType, activeFilterByPriority);

  const { data, isLoading, isError } = useQuery({
    queryFn: () => fetchData(query),
    queryKey: ["products", activeFilterByType, activeFilterByPriority],
    staleTime: 1000 * 60 * 3,
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
    isError,
  };
}
