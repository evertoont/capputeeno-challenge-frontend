import ProductPage from "@/app/product/page";
import { DefaultProviders } from "@/components/DefaultProviders";
import { fireEvent, render } from "@testing-library/react";
import * as useProductFile from "@/hooks/useProduct";
import { productMock } from "../mocks/products";

const mockFunction = jest.fn();

jest.mock("@/hooks/useProduct", () => {
  return {
    __esModule: true,
    ...jest.requireActual("@/hooks/useProduct"),
  };
});

jest.mock("next/navigation", () => {
  return {
    useRouter() {
      return {
        push: jest.fn(),
      };
    },
  };
});

jest.mock("usehooks-ts", () => {
  return {
    useLocalStorage() {
      return [[], mockFunction];
    },
  };
});

const useProductMock = jest.spyOn(useProductFile, "useProduct");

describe("ProductPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render ProductPage correctly ", () => {
    useProductMock.mockImplementation(() => {
      return {
        data: productMock,
        isLoading: false,
        isError: false,
      };
    });

    const { getByText } = render(
      <DefaultProviders>
        <ProductPage
          searchParams={{
            id: "1",
          }}
          params={{
            id: "1",
          }}
        />
      </DefaultProviders>
    );

    expect(getByText("Adicionar ao carrinho")).toBeInTheDocument();
    expect(getByText("Camiseta Ramones")).toBeInTheDocument();
  });

  it("should render ProductPage correctly with loading state", () => {
    useProductMock.mockImplementation(() => {
      return {
        data: undefined,
        isLoading: true,
        isError: false,
      };
    });

    const { getByTestId } = render(
      <DefaultProviders>
        <ProductPage
          searchParams={{
            id: "1",
          }}
          params={{
            id: "1",
          }}
        />
      </DefaultProviders>
    );

    expect(getByTestId("SkeletonLoadingProduct")).toBeInTheDocument();
  });

  it("should render ProductPage correctly with error state", () => {
    useProductMock.mockImplementation(() => {
      return {
        data: undefined,
        isLoading: false,
        isError: true,
      };
    });

    const { getByTestId } = render(
      <DefaultProviders>
        <ProductPage
          searchParams={{
            id: "1",
          }}
          params={{
            id: "1",
          }}
        />
      </DefaultProviders>
    );

    expect(getByTestId("ErrorState")).toBeInTheDocument();
  });

  it("should call handleAddToCart when click on button", () => {
    useProductMock.mockImplementation(() => {
      return {
        data: productMock,
        isLoading: false,
        isError: false,
      };
    });

    const { getByText } = render(
      <DefaultProviders>
        <ProductPage
          searchParams={{
            id: "1",
          }}
          params={{
            id: "1",
          }}
        />
      </DefaultProviders>
    );

    const button = getByText("Adicionar ao carrinho");

    fireEvent.click(button, "click");

    expect(mockFunction).toBeCalledTimes(1);
  });
});
