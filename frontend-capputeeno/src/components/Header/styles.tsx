import { theme } from "@/app/theme";
import { styled } from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 170px;
`

export const Logo = styled.a`
  text-decoration: none;
  color: ${theme.colors.logo};
  font-weight: 400;
  font-size: 40px;
  line-height: 150%;
`

export const InputContainer = styled.div`
  position: relative;
  width: 350px;

  svg {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
  }
`

export const WrapperRightContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`