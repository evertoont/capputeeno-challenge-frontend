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

export const getPriorityByType = (type: PriorityTypes) => {
  const priorityMap = {
    [PriorityTypes.NEWS]: { sortField: "created_at", sortOrder: "ASC" },
    [PriorityTypes.BIGGEST_PRICE]: {
      sortField: "price_in_cents",
      sortOrder: "DSC",
    },
    [PriorityTypes.MINOR_PRICE]: {
      sortField: "price_in_cents",
      sortOrder: "ASC",
    },
    [PriorityTypes.POPULARITY]: { sortField: "sales", sortOrder: "DSC" },
  };

  return priorityMap[type];
};
