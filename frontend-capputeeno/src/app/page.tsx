import Image from "next/image";
import styles from "./page.module.css";
import { DefaultPageLayout, PageWrapper } from "./styles";
import { FilterBar } from "@/components/FilterBar";

export default function Home() {
  return (
    <DefaultPageLayout>
      <PageWrapper>
        <FilterBar />
      </PageWrapper>
    </DefaultPageLayout>
  );
}
