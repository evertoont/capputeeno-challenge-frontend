import { theme } from "@/app/theme";
import { DefaultProviders } from "@/components/DefaultProviders";
import { FilterByType } from "@/components/FilterByType";
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import * as useFilter from "@/hooks/useFilter";

describe("FilterByType", () => {
  it("should render FilterByType correctly", () => {
    const { getByTestId } = render(
      <DefaultProviders>
        <FilterByType />
      </DefaultProviders>
    );

    expect(getByTestId("FilterByType")).toBeInTheDocument();
  });

  it("should render FilterByType with 3 filter items", () => {
    const { getAllByRole } = render(
      <DefaultProviders>
        <FilterByType />
      </DefaultProviders>
    );

    expect(getAllByRole("listitem").length).toBe(3);
  });

  it("should render FilterByType mugs", async () => {
    const { getByText, debug } = render(
      <DefaultProviders>
        <FilterByType />
      </DefaultProviders>
    );

    expect(getByText("Canecas")).toBeInTheDocument();

    const mugs = getByText("Canecas");

    fireEvent.click(mugs, "click");
  });
});
