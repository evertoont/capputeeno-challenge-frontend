"use client";

import { Saira_Stencil_One } from "next/font/google";
import {
  HeaderWrapper,
  InputContainer,
  Logo,
  WrapperRightContent,
} from "./styles";
import { Input } from "../Input";
import { SearchIcon } from "../icons/search";
import { CartControl } from "../CartControl";
import { useFilter } from "@/hooks/useFilter";

const sairaStencil = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});

export function Header() {
  const { searchProduct, setSearchProduct } = useFilter();

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchProduct(event.target.value);
  };

  return (
    <HeaderWrapper>
      <Logo className={sairaStencil.className} href="/">
        Capputeeno
      </Logo>

      <WrapperRightContent>
        <InputContainer>
          <Input
            placeholder="Procurando por algo específico?"
            value={searchProduct}
            onChange={handleChangeSearch}
          />
          <SearchIcon />
        </InputContainer>
        <CartControl />
      </WrapperRightContent>
    </HeaderWrapper>
  );
}
