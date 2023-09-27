import { CartControl } from "@/components/CartControl";
import { DefaultProviders } from "@/components/DefaultProviders";
import { fireEvent, render } from "@testing-library/react";

const mockFunction = jest.fn();

jest.mock("next/navigation", () => {
  return {
    useRouter() {
      return {
        push: mockFunction,
      };
    },
  };
});

jest.mock("usehooks-ts", () => {
  return {
    useReadLocalStorage() {
      return [
        {
          id: "1",
          name: "Test",
          price: 10,
          image: "test.png",
          quantity: 1,
        },
      ];
    },
  };
});

describe("CartControl", () => {
  it("should render CartControl correctly", () => {
    const { getByRole } = render(
      <DefaultProviders>
        <CartControl />
      </DefaultProviders>
    );

    expect(getByRole("button")).toBeInTheDocument();
  });

  it("should render CartControl with count", () => {
    const { getByText } = render(
      <DefaultProviders>
        <CartControl />
      </DefaultProviders>
    );

    expect(getByText("1")).toBeInTheDocument();
  });

  it("should call navigation push function", () => {
    const { getByRole, debug } = render(
      <DefaultProviders>
        <CartControl />
      </DefaultProviders>
    );

    const button = getByRole("button");

    expect(button).toBeInTheDocument();

    fireEvent.click(button, "click");

    expect(mockFunction).toHaveBeenCalled();
  });
});
