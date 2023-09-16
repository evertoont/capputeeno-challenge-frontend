"use client";

import { theme } from "@/app/theme";
import { FilterContextProvider } from "@/context/filterContext";
import { ProductSettingsContextProvider } from "@/context/productSettingsContext";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";

interface DefaultProvidersProps {
  children: ReactNode;
}
export function DefaultProviders(props: DefaultProvidersProps) {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <FilterContextProvider>
        <ProductSettingsContextProvider>
          <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
        </ProductSettingsContextProvider>
      </FilterContextProvider>
    </QueryClientProvider>
  );
}
