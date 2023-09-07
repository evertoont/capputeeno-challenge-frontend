"use client";

import { useProducts } from "@/hooks/useProducts";
import { ListContainer, SkeletonContainer } from "./styles";
import { ProductCard } from "../ProductCard";
import { EmptyState } from "../EmptyState";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { theme } from "@/app/theme";
import { ErrorState } from "../ErrorState";

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
      />
    ));
  };

  if (isLoading) {
    return (
      <SkeletonContainer>
        <Skeleton
          baseColor={theme.colors.shapeSkeletonBase}
          count={30}
          width={256}
          height={300}
          highlightColor={theme.colors.shapeSkeletonHighlight}
          inline
        />
      </SkeletonContainer>
    );
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
