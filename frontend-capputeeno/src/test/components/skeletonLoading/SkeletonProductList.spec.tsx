import { SkeletonProductList } from "@/components/skeletonLoading/SkeletonProductList";
import { render } from "@testing-library/react";

describe("SkeletonLoadingProduct", () => {
  it("should render SkeletonLoadingProduct correctly", () => {
    const { getByTestId } = render(<SkeletonProductList />);

    expect(getByTestId("SkeletonProductList")).toBeInTheDocument();
  });
});
