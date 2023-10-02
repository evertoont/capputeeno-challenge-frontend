"use client";

import React from "react";
import { ListContainer } from "./styles";
import { ProductCard } from "../ProductCard";
import { EmptyState } from "../EmptyState";
import { ErrorState } from "../ErrorState";
import { SkeletonProductList } from "../skeletonLoading/SkeletonProductList";
import { useProducts } from "@/hooks/useProducts";

export function ProductsList() {
  const { data: dataAllProducts, isLoading, isError } = useProducts();

  const renderProductCards = () =>
    dataAllProducts?.map((product) => (
      <ProductCard
        key={product.id}
        image={product.image_url}
        name={product.name}
        price={product.price_in_cents}
        id={product.id}
      />
    ));

  const renderComponent = () => {
    const isDataAllProductsEmpty =
      !dataAllProducts || dataAllProducts.length === 0;

    if (isError) {
      return <ErrorState>"Ops! Parece que algo deu errado."</ErrorState>;
    }

    if (isLoading) {
      return <SkeletonProductList />;
    }

    if (isDataAllProductsEmpty) {
      return (
        <EmptyState>
          "Ops! Parece que nenhum produto foi encontrado."
        </EmptyState>
      );
    }

    return renderProductCards();
  };

  return (
    <ListContainer data-testid="ProductsList">
      {renderComponent()}
    </ListContainer>
  );
}
