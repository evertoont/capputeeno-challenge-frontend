import {
  FilterItem,
  FilterType,
  PriorityFilterItem,
  PriorityType,
} from "@/types/filters";

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
  },
];

export const priorityFilterItems: PriorityFilterItem[] = [
  {
    label: "Novidades",
    type: PriorityType.NEWS,
  },
  {
    label: "Preço: Maior - menor",
    type: PriorityType.BIGGEST_PRICE,
  },
  {
    label: "Preço: Menor - maior",
    type: PriorityType.MINOR_PRICE,
  },
  {
    label: "Mais vendidos",
    type: PriorityType.POPULARITY,
  },
];
