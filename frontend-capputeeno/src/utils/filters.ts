import {
  FilterItem,
  FilterTypes,
  PriorityFilterItem,
  PriorityTypes,
} from "@/types/filters";

export const filterItemsByType: FilterItem[] = [
  {
    label: "Todos os produtos",
    type: FilterTypes.ALL,
  },
  {
    label: "Camisetas",
    type: FilterTypes.SHIRT,
  },
  {
    label: "Canecas",
    type: FilterTypes.MUG,
  },
];

export const priorityFilterItems: PriorityFilterItem[] = [
  {
    label: "Novidades",
    type: PriorityTypes.NEWS,
  },
  {
    label: "Preço: Maior - menor",
    type: PriorityTypes.BIGGEST_PRICE,
  },
  {
    label: "Preço: Menor - maior",
    type: PriorityTypes.MINOR_PRICE,
  },
  {
    label: "Mais vendidos",
    type: PriorityTypes.POPULARITY,
  },
];

export const getCategoryByType = (type: FilterTypes) => {
  const categoryMap = {
    [FilterTypes.ALL]: "all",
    [FilterTypes.MUG]: "mugs",
    [FilterTypes.SHIRT]: "t-shirts",
  };

  return categoryMap[type];
};
