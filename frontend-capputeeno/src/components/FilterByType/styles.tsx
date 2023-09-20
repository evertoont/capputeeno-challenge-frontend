import styled from "styled-components";

interface FilterItemProps {
  isActive: boolean;
}

export const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 40px;
`;

export const FilterItem = styled.li<FilterItemProps>`
  font-family: inherit;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textDark};
  font-weight: ${(props) => (props.isActive ? 600 : 400)};
  line-height: 22px;
  text-transform: uppercase;
  text-align: center;

  cursor: pointer;

  border-bottom: ${(props) =>
    props.isActive ? `4px solid ${props.theme.colors.orange}` : "none"};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 16px;
  }
`;
