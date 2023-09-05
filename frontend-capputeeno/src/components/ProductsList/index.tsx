"use client";

import { useProducts } from "@/hooks/useProducts";
import { ListContainer } from "./styles";

export function ProductsList() {
  const { data: dataAllProducts } = useProducts();

  return (
    <ListContainer>
      {dataAllProducts?.map((product) => {
        return (
          <li key={product.id}>
            <img src={product.image_url} alt={product.name} />
            <strong>{product.name}</strong>
            <span>{product.price_in_cents}</span>
          </li>
        );
      })}
    </ListContainer>
  );
}
