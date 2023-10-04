import { useQuery } from "react-query";
import { fetchDataProduct } from "@/modules/resource";

export function useProduct(productId: string) {
  const query = `query {
      Product(id: "${productId}") {
        id
        name
        description
        image_url
        price_in_cents
        category
      }
    }
  `;

  const { data, isLoading, isError } = useQuery({
    queryFn: () => fetchDataProduct(query),
    queryKey: ["product", productId],
    enabled: !!productId,
    staleTime: 1000 * 60 * 5,
  });

  return {
    data: data?.data.Product,
    isLoading,
    isError,
  };
}
