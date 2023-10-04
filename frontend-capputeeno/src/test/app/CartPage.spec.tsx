import CartPage from "@/app/cart/page";
import { DefaultProviders } from "@/components/DefaultProviders";
import { fireEvent, render } from "@testing-library/react";
import { productsInCartMock } from "../mocks/products";
import { useLocalStorage } from "usehooks-ts";

const mockNavigation = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockNavigation,
  }),
}));

jest.mock("usehooks-ts", () => ({
  useLocalStorage: jest.fn(),
}));

const mockUseLocalStorage = useLocalStorage as jest.Mock;

describe("CartPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render CartPage correctly is cart empty", () => {
    mockUseLocalStorage.mockReturnValueOnce([[], jest.fn()]);

    const { getByText } = render(
      <DefaultProviders>
        <CartPage />
      </DefaultProviders>
    );
    expect(getByText("Seu carrinho está vazio")).toBeInTheDocument();
  });

  it("should render CartPage correctly is cart is not empty", () => {
    mockUseLocalStorage.mockReturnValueOnce([productsInCartMock, jest.fn()]);

    const { getByText } = render(
      <DefaultProviders>
        <CartPage />
      </DefaultProviders>
    );
    expect(getByText("Seu Carrinho")).toBeInTheDocument();
    expect(getByText("Subtotal de produtos")).toBeInTheDocument();
    expect(getByText("Total")).toBeInTheDocument();
    expect(getByText("Camiseta Ramones")).toBeInTheDocument();
    expect(getByText("Total (2 produtos)")).toBeInTheDocument();
  });

  it("should call handleNavigateToHome when click on button", () => {
    mockUseLocalStorage.mockReturnValueOnce([[], jest.fn()]);

    const { getByText } = render(
      <DefaultProviders>
        <CartPage />
      </DefaultProviders>
    );
    const button = getByText("Ir para lista de produtos");

    fireEvent.click(button, "click");

    expect(mockNavigation).toBeCalledWith("/");
    expect(mockNavigation).toBeCalledTimes(1);
  });
});
