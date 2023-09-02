"use client";

import { useRouter } from "next/navigation";
import { CartIcon } from "../icons/cart";
import { CartCount, CartContainer } from "./styles";

export function CartControl() {
  const router = useRouter();

  const handleClickCart = () => {
    router.push("/cart");
  };

  return (
    <CartContainer onClick={handleClickCart}>
      <CartIcon />
      <CartCount>1</CartCount>
    </CartContainer>
  );
}
