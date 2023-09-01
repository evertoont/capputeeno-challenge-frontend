'use client'

import { Saira_Stencil_One } from "next/font/google"
import { HeaderWrapper, InputContainer, Logo, WrapperRightContent } from "./styles"
import { Input } from "../Input"
import { SearchIcon } from "../icons/search"
import { CartControl } from "../CartControl"

const sairaStencil = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin']
})

export function Header() {

  return (
    <HeaderWrapper>
      <Logo className={sairaStencil.className} href="/">Capputeeno</Logo>

      <WrapperRightContent>
        <InputContainer>
          <Input placeholder="Procurando por algo específico?"/>
          <SearchIcon />
        </InputContainer>
        <CartControl />
      </WrapperRightContent>
    </HeaderWrapper>
  )
}