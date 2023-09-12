import styled from "styled-components";

export const CartCount = styled.span`
  width: max-content;
  min-width: 17px;
  border-radius: 100%;
  padding: 4px;
  font-size: 10px;
  display: inline-block;

  background-color: ${({ theme }) => theme.colors.delete};
  color: white;
  font-weight: bold;

  margin-left: -10px;
`;

export const CartContainer = styled.button`
  position: relative;
  cursor: pointer;
  border: none;
  background: transparent;
`;
