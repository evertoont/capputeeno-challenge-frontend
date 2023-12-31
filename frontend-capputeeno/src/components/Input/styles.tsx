import styled from "styled-components";

export const InputWrapper = styled.input`
  width: 100%;
  border-radius: 8px;
  border: none;
  padding: 10px 16px;

  background-color: ${({ theme }) => theme.colors.secondary};

  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.textDark};

  &:focus {
    outline: none;
  }
`;
