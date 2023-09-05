"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { DefaultPageLayout, PageWrapper } from "./styles";
import { FilterBar } from "@/components/FilterBar";
import { ProductsList } from "@/components/ProductsList";
import { QueryClient, QueryClientProvider } from "react-query";

export default function Home() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <DefaultPageLayout>
        <PageWrapper>
          <FilterBar />
          <ProductsList />
        </PageWrapper>
      </DefaultPageLayout>
    </QueryClientProvider>
  );
}
