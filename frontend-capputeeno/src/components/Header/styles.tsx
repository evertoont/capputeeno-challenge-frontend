import { styled } from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 20px 24px;
  flex-direction: column;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 20px 170px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Logo = styled.button`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.logo};
  font-weight: 400;
  font-size: 40px;
  line-height: 150%;
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 280px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 350px;
  }

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const WrapperRightContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export const ClearIconButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;
