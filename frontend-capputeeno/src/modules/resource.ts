import { ProductsFetchResponse } from "@/types/produtcs";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

export const fetchData = async (
  query: string
): Promise<ProductsFetchResponse> => {
  const response = await axios.post(API_URL, { query });

  return response.data;
};
