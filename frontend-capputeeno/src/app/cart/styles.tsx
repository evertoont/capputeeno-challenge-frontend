import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 32px;
`;

export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90vw;
`;

export const CartItemsTitle = styled.h3`
  color: ${({ theme }) => theme.colors.secondTextDark};
  font-size: 24px;
  font-weight: 500;
  line-height: 150%;
  text-transform: uppercase;
`;

export const CartItemsSubTitle = styled.h3`
  color: ${({ theme }) => theme.colors.secondTextDark};
  font-size: 16px;
  font-weight: 300;
  line-height: 150%;
`;

export const HighlightedText = styled.span`
  color: ${({ theme }) => theme.colors.secondTextDark};
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
`;

export const CartItemsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;
  list-style: none;
`;

export const ContainerCart = styled.div`
  display: flex;
  gap: 32px;
  width: 100%;
`;

export const CartResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 700px;
  min-width: 352px;
  background-color: white;
  padding: 16px 24px;
`;

export const CartResultContainerInfos = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartResultTitle = styled.h3`
  color: ${({ theme }) => theme.colors.secondTextDark};
  font-size: 20px;
  font-weight: 600;
  line-height: 150%;
  text-transform: uppercase;
`;

export const CartResultInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 30px;
  width: 100%;
`;

export const CartResultPriceItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const CartResultPriceItemText = styled.p`
  color: ${({ theme }) => theme.colors.secondTextDark};
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
`;

export const ShopButton = styled.button`
  color: white;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.successColor};
  padding: 12px;
  width: 100%;
  border: none;
  margin-top: 40px;
  cursor: pointer;

  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  text-transform: uppercase;
`;

export const CartAlternativeContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 40px;
`;

export const CartAlternativeLinks = styled.a`
  color: ${({ theme }) => theme.colors.textDark};
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  text-decoration-line: underline;
  text-transform: uppercase;
`;
