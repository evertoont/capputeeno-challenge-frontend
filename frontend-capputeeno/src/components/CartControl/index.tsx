"use client";

import { useRouter } from "next/navigation";
import { CartIcon } from "../icons/cart";
import { CartCount, CartContainer } from "./styles";
import { useLocalStorage } from "usehooks-ts";
import { ProductCart } from "@/types/produtcs";

export function CartControl() {
  const router = useRouter();
  const [productCartList, _] = useLocalStorage<ProductCart[]>(
    "product-cart",
    []
  );

  const handleClickCart = () => {
    router.push("/cart");
  };

  return (
    <CartContainer onClick={handleClickCart}>
      <CartIcon />
      {productCartList.length > 0 && (
        <CartCount>{productCartList.length}</CartCount>
      )}
    </CartContainer>
  );
}
