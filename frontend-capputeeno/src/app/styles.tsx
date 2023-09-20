"use client";

import styled from "styled-components";

export const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DefaultPageLayout = styled.div`
  min-height: calc(100vh - 100px);
  padding: 34px 50px;
  background-color: ${({ theme }) => theme.colors.primary};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 34px 160px;
  }
`;

export const Divider = styled.span`
  width: 100%;
  height: 1px;
  margin: 8px auto;
  padding: 0px;
  background: ${({ theme }) => theme.colors.shapes};
`;
