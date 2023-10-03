import { DefaultProviders } from "@/components/DefaultProviders";
import { FilterBar } from "@/components/FilterBar";
import { fireEvent, render, screen } from "@testing-library/react";
import * as useProductsFile from "@/hooks/useProducts";
import * as useFilterFile from "@/hooks/useFilter";
import { productsMock } from "../mocks/products";

jest.mock("@/hooks/useProducts", () => {
  return {
    __esModule: true,
    ...jest.requireActual("@/hooks/useProducts"),
  };
});
jest.mock("@/hooks/useFilter", () => {
  return {
    __esModule: true,
    ...jest.requireActual("@/hooks/useFilter"),
  };
});

const useProductsMock = jest.spyOn(useProductsFile, "useProducts");
const useFilterFileMock = jest.spyOn(useFilterFile, "useFilter");

describe("FilterBar", () => {
  it("should render FilterBar correctly", () => {
    const { getByTestId, getByText } = render(
      <DefaultProviders>
        <FilterBar />
      </DefaultProviders>
    );

    expect(getByTestId("FilterBar")).toBeInTheDocument();
    expect(getByTestId("FilterByType")).toBeInTheDocument();
    expect(getByText("Total por página:")).toBeInTheDocument();
    expect(getByText("Organizar por")).toBeInTheDocument();
  });

  it("should render FilterBar correctly with click organize by", () => {
    const { getByRole, getByText } = render(
      <DefaultProviders>
        <FilterBar />
      </DefaultProviders>
    );

    const button = getByRole("button", {
      name: /organizar por/i,
    });

    fireEvent.click(button, "click");

    expect(getByText("Preço: Maior - menor")).toBeInTheDocument();
  });

  it("should not render Pagination when searchProduct, isError and activeFilterByType is true", () => {
    useProductsMock.mockImplementation(() => {
      return {
        data: productsMock,
        isLoading: false,
        isError: false,
        totalProducts: 2,
      };
    });

    useFilterFileMock.mockImplementation(() => {
      return {
        activeFilterByType: 0,
        searchProduct: "",
        activeFilterByPriority: 0,
        page: 1,
        perPage: 1,
        setActiveFilterByPriority: jest.fn(),
        setActiveFilterByType: jest.fn(),
        setPage: jest.fn(),
        setPerPage: jest.fn(),
        setSearchProduct: jest.fn(),
      };
    });

    const { getByText } = render(
      <DefaultProviders>
        <FilterBar />
      </DefaultProviders>
    );

    expect(getByText("Total por página:")).toBeInTheDocument();
  });
});
