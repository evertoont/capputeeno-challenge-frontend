"use client";

import { Saira_Stencil_One } from "next/font/google";
import {
  ClearIconButton,
  HeaderWrapper,
  InputContainer,
  Logo,
  WrapperRightContent,
} from "./styles";
import { Input } from "../Input";
import { SearchIcon } from "../icons/search";
import { CartControl } from "../CartControl";
import { useFilter } from "@/hooks/useFilter";
import { CloseIcon } from "../icons/close";
import { useRouter } from "next/navigation";

const sairaStencil = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});

export function Header() {
  const { searchProduct, setSearchProduct } = useFilter();
  const router = useRouter();

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchProduct(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchProduct("");
  };

  const handleNavigateToHome = () => {
    router.push("/");
  };

  return (
    <HeaderWrapper>
      <Logo className={sairaStencil.className} onClick={handleNavigateToHome}>
        Capputeeno
      </Logo>

      <WrapperRightContent>
        <InputContainer>
          <Input
            placeholder="Procurando por algo específico?"
            value={searchProduct}
            onChange={handleChangeSearch}
          />
          {searchProduct ? (
            <ClearIconButton onClick={handleClearSearch}>
              <CloseIcon />
            </ClearIconButton>
          ) : (
            <SearchIcon />
          )}
        </InputContainer>
        <CartControl />
      </WrapperRightContent>
    </HeaderWrapper>
  );
}
