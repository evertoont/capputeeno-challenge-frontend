export enum FilterType {
  "ALL",
  "SHIRT",
  "MUG",
}

export enum PriorityType {
  "NEWS",
  "BIGGEST_PRICE",
  "MINOR_PRICE",
  "POPULARITY",
}

export interface FilterItem {
  label: string;
  type: FilterType;
}

export interface PriorityFilterItem {
  label: string;
  type: PriorityType;
}
