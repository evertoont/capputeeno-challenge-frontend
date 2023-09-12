"use client";

import { DefaultPageLayout } from "../styles";
import { PageProps } from "@/types/page";
import { useProduct } from "@/hooks/useProduct";
import { BackButton } from "@/components/BackButton";
import {
  Container,
  ProductAddToCart,
  ProductCarrie,
  ProductCategory,
  ProductDescriptionContainer,
  ProductDescriptionText,
  ProductDescriptionTitle,
  ProductImage,
  ProductInfo,
  ProductInfoContainer,
  ProductName,
  ProductPrice,
  ProductSection,
} from "./styles";
import { formatPrice, translateCategory } from "@/utils/produtcs";
import { ShopBagIcon } from "@/components/icons/shopbag";
import { ErrorState } from "@/components/ErrorState";
import { SkeletonLoadingProduct } from "@/components/skeletonLoading/SkeletonLoadingProduct";

interface ProductPageParams {
  id: string;
}

export default function ProductPage(params: PageProps<ProductPageParams>) {
  const { id: productId } = params.searchParams;
  const { data, isLoading, isError } = useProduct(productId);

  if (isLoading) {
    return <SkeletonLoadingProduct />;
  }

  if (isError) {
    return <ErrorState>"Ops! Parece que algo deu errado."</ErrorState>;
  }

  return (
    <DefaultPageLayout>
      <Container>
        <BackButton navigateTo="/" />
        <ProductSection>
          <ProductImage src={data?.image_url} />
          <ProductInfoContainer>
            <ProductInfo>
              <ProductCategory>
                {translateCategory(data?.category || "")}
              </ProductCategory>
              <ProductName>{data?.name}</ProductName>
              <ProductPrice>
                {formatPrice(data?.price_in_cents ?? 0)}
              </ProductPrice>
              <ProductCarrie>
                *Frete de R$40,00 para todo o Brasil. Grátis para compras acima
                de R$900,00.
              </ProductCarrie>
              <ProductDescriptionContainer>
                <ProductDescriptionTitle>Descrição</ProductDescriptionTitle>
                <ProductDescriptionText>
                  {data?.description}
                </ProductDescriptionText>
              </ProductDescriptionContainer>
            </ProductInfo>

            <ProductAddToCart>
              <ShopBagIcon />
              Adicionar ao carrinho
            </ProductAddToCart>
          </ProductInfoContainer>
        </ProductSection>
      </Container>
    </DefaultPageLayout>
  );
}
