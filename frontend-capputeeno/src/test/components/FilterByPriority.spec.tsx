import { DefaultProviders } from "@/components/DefaultProviders";
import { FilterByPriority } from "@/components/FilterByPriority";
import { fireEvent, render } from "@testing-library/react";

describe("FilterByPriority", () => {
  it("should render FilterByPriority component", () => {
    const { getByTestId } = render(
      <DefaultProviders>
        <FilterByPriority />
      </DefaultProviders>
    );

    expect(getByTestId("FilterByPriority")).toMatchSnapshot();
  });

  it("should render FilterByPriority component with options", () => {
    const { getByText } = render(
      <DefaultProviders>
        <FilterByPriority />
      </DefaultProviders>
    );

    const filterByPriority = getByText("Organizar por");

    fireEvent.click(filterByPriority, "click");

    expect(getByText("Novidades")).toBeInTheDocument();
    expect(getByText("Preço: Maior - menor")).toBeInTheDocument();
    expect(getByText("Preço: Menor - maior")).toBeInTheDocument();
    expect(getByText("Mais vendidos")).toBeInTheDocument();
  });

  it("should render FilterByPriority component with options and click in one of them", () => {
    const { getByText, queryByText } = render(
      <DefaultProviders>
        <FilterByPriority />
      </DefaultProviders>
    );

    const filterByPriority = getByText("Organizar por");

    fireEvent.click(filterByPriority, "click");

    expect(getByText("Novidades")).toBeInTheDocument();

    const filterByPriorityOption = getByText("Novidades");

    fireEvent.click(filterByPriorityOption, "click");

    expect(queryByText("Novidades")).not.toBeInTheDocument();
  });
});
