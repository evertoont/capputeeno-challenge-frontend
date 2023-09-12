"use client";

import { useRouter } from "next/navigation";
import { CartIcon } from "../icons/cart";
import { CartCount, CartContainer } from "./styles";
import { useReadLocalStorage } from "usehooks-ts";
import { ProductCart } from "@/types/produtcs";

export function CartControl() {
  const router = useRouter();
  const productCartList = useReadLocalStorage<ProductCart[]>("product-cart");

  const existProductCart = productCartList && productCartList.length > 0;

  const handleClickCart = () => {
    router.push("/cart");
  };

  return (
    <CartContainer onClick={handleClickCart}>
      <CartIcon />
      {existProductCart && <CartCount>{productCartList?.length}</CartCount>}
    </CartContainer>
  );
}
