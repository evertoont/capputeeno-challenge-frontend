"use client";

import { DefaultPageLayout, PageWrapper } from "./styles";
import { FilterBar } from "@/components/FilterBar";
import { ProductsList } from "@/components/ProductsList";

export default function Home() {
  return (
    <DefaultPageLayout>
      <PageWrapper>
        <FilterBar />
        <ProductsList />
      </PageWrapper>
    </DefaultPageLayout>
  );
}
