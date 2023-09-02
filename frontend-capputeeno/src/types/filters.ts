export enum FilterTypes {
  "ALL",
  "SHIRT",
  "MUG",
}

export enum PriorityTypes {
  "NEWS",
  "BIGGEST_PRICE",
  "MINOR_PRICE",
  "POPULARITY",
}

export interface FilterItem {
  label: string;
  type: FilterTypes;
}

export interface PriorityFilterItem {
  label: string;
  type: PriorityTypes;
}
