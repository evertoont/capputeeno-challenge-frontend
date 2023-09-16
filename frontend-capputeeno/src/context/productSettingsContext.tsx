"use client";

import { FilterTypes, PriorityTypes } from "@/types/filters";
import { createContext, useState } from "react";

interface ProductSettingsContextProps {
  children: React.ReactNode;
}

export const ProductSettingsContext = createContext({
  maxQuantityItems: 10,
});

export function ProductSettingsContextProvider({
  children,
}: ProductSettingsContextProps) {
  const maxQuantityItems = 10;

  return (
    <ProductSettingsContext.Provider
      value={{
        maxQuantityItems,
      }}
    >
      {children}
    </ProductSettingsContext.Provider>
  );
}
