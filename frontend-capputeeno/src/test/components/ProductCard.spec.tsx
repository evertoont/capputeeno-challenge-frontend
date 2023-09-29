import { ProductCard } from "@/components/ProductCard";
import { fireEvent, render, screen } from "@testing-library/react";
import { productMock } from "../mocks/products";
import { DefaultProviders } from "@/components/DefaultProviders";
import { formatPrice } from "@/utils/products";

const mockFunction = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockFunction,
  }),
}));

describe("ProductCard", () => {
  it("should render ProductCard correctly", () => {
    const { getByText } = render(
      <DefaultProviders>
        <ProductCard
          id={productMock.id}
          image={productMock.image_url}
          name={productMock.name}
          price={productMock.price_in_cents}
        />
      </DefaultProviders>
    );

    expect(getByText(productMock.name)).toBeInTheDocument();
    expect(getByText("R$ 55,39")).toBeInTheDocument();
  });

  it("should call handleGoToProduct when click on ProductCard", () => {
    const { getByTestId } = render(
      <DefaultProviders>
        <ProductCard
          id={productMock.id}
          image={productMock.image_url}
          name={productMock.name}
          price={productMock.price_in_cents}
        />
      </DefaultProviders>
    );

    const productCard = getByTestId("ProductCard");

    fireEvent.click(productCard, "click");

    expect(mockFunction).toHaveBeenCalledWith(`/product?id=${productMock.id}`);
  });
});
