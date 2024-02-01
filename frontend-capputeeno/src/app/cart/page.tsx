"use client";

import { useRouter, usePathname } from "next/navigation";
import { ReactNode } from "react";
import { useLocalStorage } from "usehooks-ts";
import { BackButton } from "@/components/BackButton";
import { CartItem } from "@/components/CartItem";
import { DefaultPageLayout, Divider } from "../styles";
import { AlternativeLinks, formatPrice } from "@/utils/products";
import { EmptyState } from "@/components/EmptyState";
import {
  CartAlternativeContainer,
  CartAlternativeLinks,
  CartItemsContainer,
  CartItemsList,
  CartItemsSubTitle,
  CartItemsTitle,
  CartResultContainer,
  CartResultContainerInfos,
  CartResultInfos,
  CartResultPriceItem,
  CartResultPriceItemText,
  CartResultTitle,
  Container,
  ContainerCart,
  HighlightedText,
  ShopButton,
} from "./styles";
import { ProductInCart } from "@/types/products";

export default function CartPage() {
  const router = useRouter();
  const [productCartList, setProductCartList] = useLocalStorage<
    ProductInCart[]
  >("product-cart", []);

  const handleNavigateToHome = () => {
    router.push("/");
  };

  const handleRemoveProduct = (productId: string) => {
    const newProductCartList = productCartList?.filter(
      (productCart) => productCart.id !== productId
    );
    setProductCartList(newProductCartList);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    const newProductCartList = productCartList?.map((productCart) => {
      if (productCart.id === productId) {
        return {
          ...productCart,
          quantity,
        };
      }
      return productCart;
    });
    setProductCartList(newProductCartList);
  };

  const totalValueInCart = productCartList.reduce(
    (acc, productCart) =>
      acc + productCart.price_in_cents * productCart.quantity,
    0
  );
  const deliveryFee = 4000;
  const totalValueWithDeliveryFee = formatPrice(totalValueInCart + deliveryFee);

  const isCartEmpty = !productCartList || productCartList.length === 0;

  let pageContent: ReactNode = (
    <EmptyState>
      <h3>Seu carrinho está vazio</h3>
      <p>Adicione produtos ao seu carrinho!</p>
      <ShopButton onClick={handleNavigateToHome}>
        Ir para lista de produtos
      </ShopButton>
    </EmptyState>
  );

  if (!isCartEmpty) {
    pageContent = (
      <ContainerCart>
        <CartItemsContainer>
          <CartItemsTitle>Seu Carrinho</CartItemsTitle>
          <CartItemsSubTitle>
            Total ({productCartList?.length} produtos)
            <HighlightedText>
              &nbsp;{formatPrice(totalValueInCart)}
            </HighlightedText>
          </CartItemsSubTitle>
          <CartItemsList>
            {productCartList?.map((productCart, index) => (
              <CartItem
                productInfo={productCart}
                onRemoveProduct={handleRemoveProduct}
                onUpdateQuantity={handleUpdateQuantity}
                key={`${productCart.id}-${index}`}
              />
            ))}
          </CartItemsList>
        </CartItemsContainer>
        <CartResultContainer>
          <CartResultContainerInfos>
            <CartResultTitle>Resumo do pedido</CartResultTitle>
            <CartResultInfos>
              <CartResultPriceItem>
                <CartResultPriceItemText>
                  Subtotal de produtos
                </CartResultPriceItemText>
                <CartResultPriceItemText>
                  {formatPrice(totalValueInCart)}
                </CartResultPriceItemText>
              </CartResultPriceItem>
              <CartResultPriceItem>
                <CartResultPriceItemText>Entrega</CartResultPriceItemText>
                <CartResultPriceItemText>
                  {formatPrice(deliveryFee)}
                </CartResultPriceItemText>
              </CartResultPriceItem>
              <Divider />
              <CartResultPriceItem>
                <HighlightedText>Total</HighlightedText>
                <HighlightedText>{totalValueWithDeliveryFee}</HighlightedText>
              </CartResultPriceItem>
            </CartResultInfos>
            <ShopButton>Finalizar a compra</ShopButton>
          </CartResultContainerInfos>
          <CartAlternativeContainer>
            {AlternativeLinks.map((alternativeLink, index) => (
              <CartAlternativeLinks
                href={alternativeLink.link}
                key={`${alternativeLink.link}-${index}`}
                target="_blank"
                rel="noreferrer"
              >
                {alternativeLink.label}
              </CartAlternativeLinks>
            ))}
          </CartAlternativeContainer>
        </CartResultContainer>
      </ContainerCart>
    );
  }

  return (
    <DefaultPageLayout>
      <Container>
        <BackButton />
        {pageContent}
      </Container>
    </DefaultPageLayout>
  );
}
