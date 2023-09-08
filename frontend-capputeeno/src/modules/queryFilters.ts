import { FilterTypes, PriorityTypes } from "@/types/filters";
import { getCategoryByType, getPriorityByType } from "@/utils/filters";

export const mountQueryFilters = (
  categoryType: FilterTypes,
  priorityType: PriorityTypes
): string => {
  const categoryFilter = getCategoryByType(categoryType);
  const priorityFilter = getPriorityByType(priorityType);

  const isAllAndPopularity =
    categoryType === FilterTypes.ALL &&
    priorityType === PriorityTypes.POPULARITY;

  const filterCategoryValid = categoryType
    ? `filter: { category: "${categoryFilter}" }`
    : "";

  if (isAllAndPopularity) {
    return `query {
      allProducts (sortField: "sales", sortOrder: "DSC") {
        id
        name
        price_in_cents
        image_url
      }
    }`;
  }

  return `query {
    allProducts(${filterCategoryValid} sortField: "${priorityFilter.sortField}", sortOrder: "${priorityFilter.sortOrder}") {
      id
      name
      price_in_cents
      image_url
      category
    }
  }`;
};
