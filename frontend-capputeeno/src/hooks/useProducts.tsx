import { ProductsFetchResponse } from "@/types/produtcs";
import axios from "axios";
import { useQuery } from "react-query";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetchData = async (query: string): Promise<ProductsFetchResponse> => {
  const response = await axios.post(API_URL, { query });

  return response.data;
};

export function useProducts() {
  const { data } = useQuery({
    queryKey: "products",
    queryFn: () =>
      fetchData(`
        query {
          allProducts {
            id
            name
            price_in_cents
            image_url
          }
        }
      `),
    staleTime: 1000 * 60 * 1,
  });

  return {
    data: data?.data?.allProducts,
  };
}
