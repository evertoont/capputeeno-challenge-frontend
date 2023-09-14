import {
  Product,
  ProductFetchResponse,
  ProductsFetchResponse,
} from "@/types/products";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

export const fetchDataAllProducts = async (
  query: string
): Promise<ProductsFetchResponse> => {
  const response = await axios.post(API_URL, { query });

  return response.data;
};

export const fetchDataProduct = async (
  query: string
): Promise<ProductFetchResponse> => {
  const response = await axios.post(API_URL, { query });

  return response.data;
};
