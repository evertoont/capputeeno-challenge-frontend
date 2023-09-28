import { BackButton } from "@/components/BackButton";
import { Container, SkeletonContainer, SkeletonContainerInfo } from "./styles";
import Skeleton from "react-loading-skeleton";
import { theme } from "@/app/theme";
import { DefaultPageLayout } from "@/app/styles";

export function SkeletonLoadingProduct() {
  return (
    <SkeletonContainer data-testid="SkeletonLoadingProduct">
      <Skeleton
        baseColor={theme.colors.shapeSkeletonBase}
        width={640}
        height={580}
        highlightColor={theme.colors.shapeSkeletonHighlight}
      />

      <SkeletonContainerInfo>
        <div>
          <Skeleton
            baseColor={theme.colors.shapeSkeletonBase}
            width={100}
            height={20}
            highlightColor={theme.colors.shapeSkeletonHighlight}
          />

          <Skeleton
            baseColor={theme.colors.shapeSkeletonBase}
            width={448}
            height={48}
            highlightColor={theme.colors.shapeSkeletonHighlight}
          />
        </div>

        <Skeleton
          baseColor={theme.colors.shapeSkeletonBase}
          width={448}
          height={80}
          highlightColor={theme.colors.shapeSkeletonHighlight}
        />

        <Skeleton
          baseColor={theme.colors.shapeSkeletonBase}
          width={448}
          height={44}
          highlightColor={theme.colors.shapeSkeletonHighlight}
        />
      </SkeletonContainerInfo>
    </SkeletonContainer>
  );
}
