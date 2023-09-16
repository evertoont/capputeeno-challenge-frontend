import { ProductSettingsContext } from "@/context/productSettingsContext";
import { useContext } from "react";

export function useProductSettings() {
  return useContext(ProductSettingsContext);
}
