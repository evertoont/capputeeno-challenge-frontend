"use client";

import { useProducts } from "@/hooks/useProducts";
import { ListContainer } from "./styles";
import { ProductCard } from "../ProductCard";
import { EmptyState } from "../EmptyState";

export function ProductsList() {
  const { data: dataAllProducts } = useProducts();

  const renderProductCards = () => {
    return dataAllProducts?.map((product) => (
      <ProductCard
        key={product.id}
        image={product.image_url}
        name={product.name}
        price={product.price_in_cents}
      />
    ));
  };

  const isDataAllProductsEmpty =
    !dataAllProducts || dataAllProducts.length === 0;

  return (
    <ListContainer>
      {isDataAllProductsEmpty ? (
        <EmptyState message="Ops! Parece que nenhum produto foi encontrado." />
      ) : (
        renderProductCards()
      )}
    </ListContainer>
  );
}
