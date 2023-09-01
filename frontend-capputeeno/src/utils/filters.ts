import { FilterItem, FilterType } from "@/types/filters";

export const filterItems: FilterItem[] = [
  {
    label: "Todos os produtos",
    type: FilterType.ALL,
  },
  {
    label: "Camisetas",
    type: FilterType.SHIRT,
  },
  {
    label: "Canecas",
    type: FilterType.MUG,
  }
]