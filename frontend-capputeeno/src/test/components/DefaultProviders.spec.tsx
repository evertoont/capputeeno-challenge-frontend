import { DefaultProviders } from "@/components/DefaultProviders";
import { render } from "@testing-library/react";

describe("DefaultProviders", () => {
  it("should render DefaultProviders correctly", () => {
    const { getByTestId } = render(
      <DefaultProviders>
        <div data-testid="DefaultProviders" />
      </DefaultProviders>
    );

    expect(getByTestId("DefaultProviders")).toBeInTheDocument();
  });
});
