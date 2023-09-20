import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  align-items: start;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
