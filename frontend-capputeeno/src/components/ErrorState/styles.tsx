import styled from "styled-components";

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  margin-top: 10vh;

  svg {
    width: 250px;
    height: 250px;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
`;
