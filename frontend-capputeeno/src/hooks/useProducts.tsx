import { useQuery } from "react-query";
import { useFilter } from "./useFilter";
import { fetchDataAllProducts } from "@/modules/resource";
import { mountQueryFilters } from "@/modules/queryFilters";
import { useDeferredValue } from "react";

export function useProducts() {
  const {
    searchProduct,
    activeFilterByType,
    activeFilterByPriority,
    page,
    perPage,
  } = useFilter();
  const searchProductDeferred = useDeferredValue(searchProduct);
  const query = mountQueryFilters(
    activeFilterByType,
    activeFilterByPriority,
    page,
    perPage
  );

  const { data, isLoading, isError } = useQuery({
    queryFn: () => fetchDataAllProducts(query),
    queryKey: [
      "products",
      activeFilterByType,
      activeFilterByPriority,
      perPage,
      page,
    ],
    staleTime: 1000 * 60 * 3,
  });

  const allProducts = data?.data?.allProducts;
  const totalProducts = data?.data?._allProductsMeta.count;

  const filteredData = allProducts?.filter((product) => {
    return product.name
      .toLowerCase()
      .includes(searchProductDeferred.toLowerCase());
  });

  return {
    data: filteredData,
    totalProducts,
    isLoading,
    isError,
  };
}
