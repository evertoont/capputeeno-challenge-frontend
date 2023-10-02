import * as useProductsFile from "../../hooks/useProducts";
import { DefaultProviders } from "@/components/DefaultProviders";
import { ProductsList } from "@/components/ProductsList";
import { productsMock } from "../mocks/products";
import { render } from "@testing-library/react";

const mockFunction = jest.fn();

jest.mock("@/hooks/useProducts", () => {
  return {
    __esModule: true,
    ...jest.requireActual("@/hooks/useProducts"),
  };
});

const useProductsMock = jest.spyOn(useProductsFile, "useProducts");

jest.mock("next/navigation", () => {
  return {
    useRouter() {
      return {
        push: mockFunction,
      };
    },
  };
});

describe("ProductsList", () => {
  it("should render ProductsList correctly", () => {
    useProductsMock.mockImplementation(() => {
      return {
        data: productsMock,
        isLoading: false,
        isError: false,
        totalProducts: 2,
      };
    });

    const { getByTestId, getByText } = render(
      <DefaultProviders>
        <ProductsList />
      </DefaultProviders>
    );

    expect(getByTestId("ProductsList")).toBeInTheDocument();
    expect(getByText("Camiseta Ramones")).toBeInTheDocument();
  });

  it("should render ProductsList with isLoading is true", () => {
    useProductsMock.mockImplementation(() => {
      return {
        data: [],
        isLoading: true,
        isError: false,
        totalProducts: 2,
      };
    });

    const { getByTestId, getByText } = render(
      <DefaultProviders>
        <ProductsList />
      </DefaultProviders>
    );

    expect(getByTestId("SkeletonProductList")).toBeInTheDocument();
  });

  it("should render ProductsList with isError is true", () => {
    useProductsMock.mockImplementation(() => {
      return {
        data: [],
        isLoading: false,
        isError: true,
        totalProducts: 2,
      };
    });

    const { getByTestId } = render(
      <DefaultProviders>
        <ProductsList />
      </DefaultProviders>
    );

    expect(getByTestId("ErrorState")).toBeInTheDocument();
  });

  it("should render ProductsList with data is empty", () => {
    useProductsMock.mockImplementation(() => {
      return {
        data: [],
        isLoading: false,
        isError: false,
        totalProducts: 2,
      };
    });

    const { getByTestId } = render(
      <DefaultProviders>
        <ProductsList />
      </DefaultProviders>
    );

    expect(getByTestId("EmptyState")).toBeInTheDocument();
  });
});
