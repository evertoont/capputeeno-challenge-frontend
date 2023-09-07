import { FilterTypes } from "@/types/filters";
import { getCategoryByType } from "@/utils/filters";

export const mountQueryFilters = (categoryType: FilterTypes): string => {
  if (categoryType === FilterTypes.ALL) {
    return `query {
      allProducts {
        id
        name
        price_in_cents
        image_url
      }
    }`;
  }

  const categoryFilter = getCategoryByType(categoryType);

  return `query {
    allProducts(filter: { category: "${categoryFilter}" }) {
      id
      name
      price_in_cents
      image_url
    }
  }`;
};
