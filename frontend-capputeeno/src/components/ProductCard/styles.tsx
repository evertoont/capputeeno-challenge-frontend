import { theme } from "@/app/theme";
import styled from "styled-components";

export const ProductCardContainer = styled.div`
  display: flex;
  width: 256px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px 8px 4px 4px;
  cursor: pointer;

  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
`;

export const ProductCardImage = styled.img`
  width: 256px;
  height: 300px;
  border-radius: 8px 8px 0px 0px;
`;

export const ProductCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 8px 12px;
`;

export const ProductCardName = styled.h3`
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
  color: ${theme.colors.secondTextDark};
`;

export const ProductCardPrice = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  color: ${theme.colors.shapesDark};
`;
