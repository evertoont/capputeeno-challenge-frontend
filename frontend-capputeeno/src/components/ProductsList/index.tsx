"use client";

import { useProducts } from "@/hooks/useProducts";
import { ListContainer } from "./styles";
import { ProductCard } from "../ProductCard";

export function ProductsList() {
  const { data: dataAllProducts } = useProducts();

  return (
    <ListContainer>
      {dataAllProducts?.map((product) => {
        return (
          <ProductCard
            key={product.id}
            image={product.image_url}
            name={product.name}
            price={product.price_in_cents}
          />
        );
      })}
    </ListContainer>
  );
}
