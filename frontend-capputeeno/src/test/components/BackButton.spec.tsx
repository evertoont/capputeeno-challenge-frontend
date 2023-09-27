import { ThemeProvider } from "styled-components";
import { BackButton } from "../../components/BackButton";
import { fireEvent, render } from "@testing-library/react";
import { theme } from "../../app/theme";

const mockFunction = jest.fn();

jest.mock("next/navigation", () => {
  return {
    useRouter() {
      return {
        back: mockFunction,
      };
    },
  };
});

describe("BackButton", () => {
  it("should render backButton correctly", () => {
    const { getByText, getByRole } = render(
      <ThemeProvider theme={theme}>
        <BackButton />
      </ThemeProvider>
    );

    expect(getByRole("button")).toBeInTheDocument();
    expect(getByText("Voltar")).toBeInTheDocument();
  });

  it("should call navigation back function", () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <BackButton />
      </ThemeProvider>
    );

    const button = getByRole("button");

    expect(button).toBeInTheDocument();

    fireEvent.click(button, "click");

    expect(mockFunction).toHaveBeenCalled();
  });
});
