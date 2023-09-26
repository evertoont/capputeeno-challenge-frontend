import { fireEvent, render } from "@testing-library/react";
import { CartControl } from "../../components/CartControl";
import { ThemeProvider } from "styled-components";
import { theme } from "../../app/theme";

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
      <ThemeProvider theme={theme}>
        <CartControl />
      </ThemeProvider>
    );

    expect(getByRole("button")).toBeInTheDocument();
  });

  it("should render CartControl with count", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <CartControl />
      </ThemeProvider>
    );

    expect(getByText("1")).toBeInTheDocument();
  });

  it("should call navigation push function", () => {
    const { getByRole, debug } = render(
      <ThemeProvider theme={theme}>
        <CartControl />
      </ThemeProvider>
    );

    const button = getByRole("button");

    fireEvent.click(button, "click");

    expect(mockFunction).toHaveBeenCalled();
  });
});
