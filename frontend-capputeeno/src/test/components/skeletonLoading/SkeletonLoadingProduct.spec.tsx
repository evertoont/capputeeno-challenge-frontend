import { SkeletonLoadingProduct } from "@/components/skeletonLoading/SkeletonLoadingProduct";
import { render } from "@testing-library/react";

describe("SkeletonLoadingProduct", () => {
  it("should render SkeletonLoadingProduct correctly", () => {
    const { getByTestId } = render(<SkeletonLoadingProduct />);

    expect(getByTestId("SkeletonLoadingProduct")).toBeInTheDocument();
  });
});
