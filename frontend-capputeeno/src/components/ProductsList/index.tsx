"use client";

import { useProducts } from "@/hooks/useProducts";
import { ListContainer, SkeletonContainer } from "./styles";
import { ProductCard } from "../ProductCard";
import { EmptyState } from "../EmptyState";
import { ErrorState } from "../ErrorState";
import { SkeletonProductList } from "../skeletonLoading/SkeletonProductList";

export function ProductsList() {
  const { data: dataAllProducts, isLoading, isError } = useProducts();

  const isDataAllProductsEmpty =
    !dataAllProducts || dataAllProducts.length === 0;

  const renderProductCards = () => {
    return dataAllProducts?.map((product) => (
      <ProductCard
        key={product.id}
        image={product.image_url}
        name={product.name}
        price={product.price_in_cents}
        id={product.id}
      />
    ));
  };

  if (isLoading) {
    return <SkeletonProductList />;
  }

  if (isError) {
    return <ErrorState>"Ops! Parece que algo deu errado."</ErrorState>;
  }

  return (
    <ListContainer>
      {isDataAllProductsEmpty ? (
        <EmptyState>
          "Ops! Parece que nenhum produto foi encontrado."
        </EmptyState>
      ) : (
        renderProductCards()
      )}
    </ListContainer>
  );
}
