import { SkeletonContainer } from "./styles";
import Skeleton from "react-loading-skeleton";
import { theme } from "@/app/theme";

export function SkeletonProductList() {
  return (
    <SkeletonContainer data-testid="SkeletonProductList">
      <Skeleton
        baseColor={theme.colors.shapeSkeletonBase}
        count={30}
        width={256}
        height={300}
        highlightColor={theme.colors.shapeSkeletonHighlight}
        inline
      />
    </SkeletonContainer>
  );
}
