import { fireEvent, render } from "@testing-library/react";
import { productInCartMock } from "../mocks/products";
import { ThemeProvider } from "styled-components";
import { CartItem } from "@/components/CartItem";
import { theme } from "@/app/theme";

const mockUpdateQuantity = jest.fn();
const mockRemoveProduct = jest.fn();

jest.mock("@/utils/products", () => ({
  formatPrice: jest.fn().mockReturnValue("R$ 10,00"),
}));

jest.mock("@/hooks/useProductSettings", () => ({
  useProductSettings: jest.fn().mockReturnValue({
    maxQuantityItems: 10,
  }),
}));

describe("CartItem", () => {
  it("should render CartItem correctly", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CartItem
          onRemoveProduct={mockRemoveProduct}
          onUpdateQuantity={mockUpdateQuantity}
          productInfo={productInCartMock}
        />
      </ThemeProvider>
    );

    expect(getByTestId("CartItem")).toMatchSnapshot();
  });

  it("should call onUpdateQuantity when select quantity", () => {
    const { getByRole, debug } = render(
      <ThemeProvider theme={theme}>
        <CartItem
          onRemoveProduct={mockRemoveProduct}
          onUpdateQuantity={mockUpdateQuantity}
          productInfo={productInCartMock}
        />
      </ThemeProvider>
    );

    const selectQuantity = getByRole("combobox");

    expect(selectQuantity).toBeInTheDocument();

    fireEvent.change(selectQuantity, { target: { value: "2" } });

    expect(mockUpdateQuantity).toHaveBeenCalledTimes(1);
  });

  it("should call onRemoveProduct when click on delete button", () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <CartItem
          onRemoveProduct={mockRemoveProduct}
          onUpdateQuantity={mockUpdateQuantity}
          productInfo={productInCartMock}
        />
      </ThemeProvider>
    );

    const deleteButton = getByRole("button");

    expect(deleteButton).toBeInTheDocument();

    fireEvent.click(deleteButton, "click");

    expect(mockRemoveProduct).toHaveBeenCalledTimes(1);
  });
});
