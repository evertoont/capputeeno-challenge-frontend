import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: white;
  /* width: 736px; */
  height: 210px;
`;

export const ProductImage = styled.img`
  max-height: 100%;
  width: 256px;
  border-radius: 8px 0 0 8px;
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 31px;
  height: 100%;
  width: 100%;
`;

export const ProductInfoHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ProductInfoTitle = styled.h4`
  color: ${({ theme }) => theme.colors.secondTextDark};
  font-size: 20px;
  font-weight: 300;
  line-height: 150%;
`;

export const ProductDeleteButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const ProductInfoDescription = styled.p`
  color: ${({ theme }) => theme.colors.secondTextDark};
  font-weight: 400;
  font-size: 12px;
  max-height: 50%;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 12px;
`;

export const ProductInfoFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductInfoPrice = styled.span`
  color: ${({ theme }) => theme.colors.shapesDark};
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
`;

export const SelectQuantity = styled.select`
  padding: 8px;
  max-width: 65px;
  width: 100%;
  border: 1.5px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.textDark};
  font-weight: 400;
  font-size: 16px;
  outline: none;
`;
