import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 32px;

  max-width: 100%;
  margin-top: 32px;
`;

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
