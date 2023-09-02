import { FilterContext } from "@/context/filterContext";
import { useContext } from "react";

export function useFilter() {
  return useContext(FilterContext);
}
