import styled from "styled-components";

export const SkeletonContainer = styled.div`
  margin-top: 32px;
  max-width: 100%;

  > span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    gap: 32px;
  }
`;
