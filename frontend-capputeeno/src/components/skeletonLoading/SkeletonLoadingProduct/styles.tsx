import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const SkeletonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 32px;
  gap: 32px;
`;

export const SkeletonContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
