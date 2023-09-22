export interface Product {
  name: string;
  price_in_cents: number;
  id: string;
  image_url: string;
  description?: string;
  category?: string;
}

export interface ProductsFetchResponse {
  data: {
    allProducts: Product[];
    _allProductsMeta: {
      count: number;
    };
  };
}

export interface ProductFetchResponse {
  data: {
    Product: Product;
  };
}

export interface ProductInCart extends Product {
  quantity: number;
}
