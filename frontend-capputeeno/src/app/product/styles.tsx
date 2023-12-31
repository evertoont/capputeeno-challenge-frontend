import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const ProductSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 32px;
  gap: 32px;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    align-items: normal;
  }
`;

export const ProductImage = styled.img`
  max-width: 640px;
  height: 300px;
  width: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 50%;
    height: 580px;
  }
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 30%;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const ProductCategory = styled.span`
  color: ${({ theme }) => theme.colors.secondTextDark};
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
`;

export const ProductName = styled.h2`
  color: ${({ theme }) => theme.colors.secondTextDark};
  font-size: 32px;
  font-weight: 300;
  line-height: 150%;
  margin-top: 12px;
`;

export const ProductPrice = styled.span`
  color: ${({ theme }) => theme.colors.shapesDark};
  font-size: 20px;
  font-weight: 600;
  line-height: 150%;
  margin-top: 4px;
`;

export const ProductDeliveryFee = styled.p`
  font-weight: 400;
  font-size: 12px;
  margin-top: 24px;
  color: ${({ theme }) => theme.colors.textDark};
`;

export const ProductDescriptionContainer = styled.div`
  margin-top: 58px;
  min-height: 160px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    min-height: 0;
  }
`;

export const ProductDescriptionTitle = styled.h3`
  color: ${({ theme }) => theme.colors.textDark};
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  text-transform: uppercase;
`;

export const ProductDescriptionText = styled.p`
  color: ${({ theme }) => theme.colors.secondTextDark};
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
`;

export const ProductAddToCart = styled.button`
  background: ${({ theme }) => theme.colors.blueButton};
  border-radius: 4px;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  height: 44px;
  line-height: 150%;
  mix-blend-mode: multiply;
  padding: 10px 0;
  text-align: center;
  text-transform: uppercase;
  max-width: 448px;
  padding: 10px;

  margin-top: 32px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 0;
  }
`;
