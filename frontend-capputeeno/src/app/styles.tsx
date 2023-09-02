"use client";

import styled from "styled-components";
import { theme } from "./theme";

export const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DefaultPageLayout = styled.div`
  min-height: 100vh;
  padding: 34px 160px;
  background-color: ${theme.colors.primary};
`;
