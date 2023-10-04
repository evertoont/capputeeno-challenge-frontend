"use client";

import { DefaultPageLayout } from "../styles";
import { PageProps } from "@/types/page";
import { useProduct } from "@/hooks/useProduct";
import { BackButton } from "@/components/BackButton";
import {
  Container,
  ProductAddToCart,
  ProductDeliveryFee,
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
import { formatPrice, translateCategory } from "@/utils/products";
import { ShopBagIcon } from "@/components/icons/shopbag";
import { ErrorState } from "@/components/ErrorState";
import { SkeletonLoadingProduct } from "@/components/skeletonLoading/SkeletonLoadingProduct";
import { useLocalStorage } from "usehooks-ts";
import { ProductInCart } from "@/types/products";
import { ReactNode } from "react";
import { useProductSettings } from "@/hooks/useProductSettings";
import { toast } from "react-toastify";

interface ProductPageParams {
  id: string;
}

export default function ProductPage(params: PageProps<ProductPageParams>) {
  const { id: productId } = params.searchParams;
  const { data, isLoading, isError } = useProduct(productId);
  const { maxQuantityItems } = useProductSettings();
  const [productCartList, setProductCartList] = useLocalStorage<
    ProductInCart[]
  >("product-cart", []);

  const handleAddToCart = () => {
    if (!data) return;

    const productExistIndex = productCartList.findIndex(
      (item) => item.id === productId
    );
    const canAddToCart =
      productExistIndex !== -1 &&
      productCartList[productExistIndex].quantity < maxQuantityItems;

    if (canAddToCart) {
      const updatedCart = [...productCartList];
      updatedCart[productExistIndex].quantity += 1;
      setProductCartList(updatedCart);
    } else if (productExistIndex === -1) {
      setProductCartList([...productCartList, { ...data, quantity: 1 }]);
    } else {
      toast.error("Limite de itens no carrinho atingido!", {
        toastId: "max-quantity-items",
      });
    }
  };

  const renderComponent = () => {
    if (isLoading) {
      return <SkeletonLoadingProduct />;
    }

    if (isError || !data) {
      return <ErrorState>"Ops! Parece que algo deu errado."</ErrorState>;
    }

    return (
      <ProductSection>
        <ProductImage src={data.image_url || ""} />
        <ProductInfoContainer>
          <ProductInfo>
            <ProductCategory>
              {translateCategory(data?.category || "")}
            </ProductCategory>
            <ProductName>{data?.name}</ProductName>
            <ProductPrice>
              {formatPrice(data?.price_in_cents || 0)}
            </ProductPrice>
            <ProductDeliveryFee>
              *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
              R$900,00.
            </ProductDeliveryFee>
            <ProductDescriptionContainer>
              <ProductDescriptionTitle>Descrição</ProductDescriptionTitle>
              <ProductDescriptionText>
                {data?.description}
              </ProductDescriptionText>
            </ProductDescriptionContainer>
          </ProductInfo>

          <ProductAddToCart onClick={handleAddToCart}>
            <ShopBagIcon />
            Adicionar ao carrinho
          </ProductAddToCart>
        </ProductInfoContainer>
      </ProductSection>
    );
  };

  return (
    <DefaultPageLayout>
      <Container>
        <BackButton />
        {renderComponent()}
      </Container>
    </DefaultPageLayout>
  );
}
