export enum FilterType {
  'ALL',
  'SHIRT',
  'MUG'
}

export interface FilterItem {
  label: string;
  type: FilterType;
}