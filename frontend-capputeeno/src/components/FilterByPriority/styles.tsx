import { theme } from "@/app/theme";
import styled from "styled-components";

interface FilterItemProps {
  isActive: boolean;
}

export const FilterContainerPriority = styled.div`
  align-items: center;
  display: flex;
  position: relative;
`;

export const MainButtonSelected = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  color: ${theme.colors.textDark};
  cursor: pointer;
  display: flex;
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  gap: 8px;
  justify-content: center;
  line-height: 22px;
`;

export const FilterWrapperOptions = styled.ul`
  background-color: white;
  border-radius: 4px;
  box-shadow: ${theme.shadows.shadowOne};
  display: flex;
  flex-direction: column;
  gap: 4px;
  list-style: none;
  margin-top: 4px;
  padding: 12px 16px;
  position: absolute;
  right: -2px;
  top: 100%;
  width: max-content;
  z-index: 100;
`;

export const FilterOption = styled.li<FilterItemProps>`
  cursor: pointer;
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  color: ${(props) =>
    props.isActive ? theme.colors.orange : theme.colors.textDark};
  border-radius: 4px;
  padding: 4px 8px;

  &:hover {
    background-color: ${theme.colors.primary};
  }
`;
