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
import { useProducts } from "@/hooks/useProducts";

const sairaStencil = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});

export function Header() {
  const {
    searchProduct,
    setSearchProduct,
    setPage,
    setPerPage,
    activeFilterByType,
  } = useFilter();
  const { totalProducts } = useProducts();
  const router = useRouter();

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 0 && totalProducts) {
      setPage(0);
      setPerPage(totalProducts);
    }

    if (event.target.value === "" && !activeFilterByType) {
      setPage(0);
      setPerPage(10);
    }

    setSearchProduct(event.target.value);
  };

  const handleClearSearch = () => {
    if (!activeFilterByType) {
      setPage(0);
      setPerPage(10);
    }
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
