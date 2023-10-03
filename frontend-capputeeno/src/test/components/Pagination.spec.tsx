import { DefaultProviders } from "@/components/DefaultProviders";
import { Pagination } from "@/components/Pagination";
import { fireEvent, render, screen } from "@testing-library/react";
import * as useFilterFile from "@/hooks/useFilter";

jest.mock("@/hooks/useFilter", () => {
  return {
    __esModule: true,
    ...jest.requireActual("@/hooks/useFilter"),
  };
});

const useFilterFileMock = jest.spyOn(useFilterFile, "useFilter");

const mockSetPerPageFunction = jest.fn();
const mockSetPageFunction = jest.fn();

describe("Pagination", () => {
  it("should render Pagination correctly", () => {
    const { getByTestId, getByText } = render(
      <DefaultProviders>
        <Pagination />
      </DefaultProviders>
    );

    expect(getByTestId("Pagination")).toBeInTheDocument();
    expect(getByText("Total por página:")).toBeInTheDocument();
  });

  it("should render Pagination correctly with select per page value", () => {
    useFilterFileMock.mockImplementation(() => {
      return {
        activeFilterByType: 0,
        searchProduct: "",
        activeFilterByPriority: 0,
        page: 1,
        perPage: 1,
        setActiveFilterByPriority: jest.fn(),
        setActiveFilterByType: jest.fn(),
        setPage: mockSetPerPageFunction,
        setPerPage: mockSetPageFunction,
        setSearchProduct: jest.fn(),
      };
    });

    const { getByRole } = render(
      <DefaultProviders>
        <Pagination />
      </DefaultProviders>
    );

    const selectElement = getByRole("combobox");

    expect(selectElement).toBeInTheDocument();

    fireEvent.change(selectElement, { target: { value: 20 } });

    expect(mockSetPerPageFunction).toBeCalledTimes(1);
    expect(mockSetPageFunction).toBeCalledTimes(1);
  });
});
