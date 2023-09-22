import styled from "styled-components";

interface PaginationProps {
  isActive?: boolean;
  leftArrow?: boolean;
  rightArrow?: boolean;
  isDisabled?: boolean;
}

export const FilterPaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 20px;
  flex-direction: column;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 8px;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    justify-content: flex-start;
  }
`;

export const PerPageText = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textDark};
`;

export const SelectTotalPerPage = styled.select`
  padding: 4px;
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

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-top: 8px;
`;

export const PaginationButton = styled.button<PaginationProps>`
  max-width: 32px;
  width: 32px;
  height: 32px;
  border: ${({ theme, isActive }) =>
    isActive ? ` 1.5px solid ${theme.colors.orange}` : "none"};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.shapesLight};
  font-weight: 400;
  font-size: 16px;
  outline: none;
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.orange : theme.colors.textDark};

  svg {
    transform: ${({ leftArrow, rightArrow }) => {
      if (leftArrow) return "rotate(90deg)";
      if (rightArrow) return "rotate(-90deg)";
    }};
  }
`;
