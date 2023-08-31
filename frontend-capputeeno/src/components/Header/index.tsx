import { Saira_Stencil_One } from "next/font/google"
import { HeaderWrapper, InputContainer, Logo } from "./styles"
import { Input } from "../Input"
import { SearchIcon } from "../icons/search"

const sairaStencil = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin']
})

export function Header() {

  return (
    <HeaderWrapper>
      <Logo className={sairaStencil.className} href="/">Capputeeno</Logo>

      <InputContainer>
        <Input placeholder="Procurando por algo específico?"/>
        <SearchIcon />
      </InputContainer>
    </HeaderWrapper>
  )
}