import { DefaultProviders } from "@/components/DefaultProviders";
import { Header } from "@/components/Header";
import { fireEvent, render } from "@testing-library/react";

const mockFunction = jest.fn();

jest.mock("next/font/google", () => ({
  Saira_Stencil_One: () => {
    return {
      weight: ["400"],
      subsets: ["latin"],
    };
  },
}));

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockFunction,
  }),
}));

describe("should render Header correctly", () => {
  it("should render Header correctly", () => {
    const { getByText, getByPlaceholderText } = render(
      <DefaultProviders>
        <Header />
      </DefaultProviders>
    );

    expect(getByText("Capputeeno")).toBeInTheDocument();
    expect(
      getByPlaceholderText("Procurando por algo específico?")
    ).toBeInTheDocument();
  });

  it("should call handleNavigateToHome", () => {
    const { getByText } = render(
      <DefaultProviders>
        <Header />
      </DefaultProviders>
    );

    const logo = getByText("Capputeeno");

    fireEvent.click(logo, "click");

    expect(mockFunction).toHaveBeenCalledWith("/");
  });

  it("should call handleChangeSearch", () => {
    const { getByPlaceholderText } = render(
      <DefaultProviders>
        <Header />
      </DefaultProviders>
    );

    const input = getByPlaceholderText("Procurando por algo específico?");

    fireEvent.change(input, { target: { value: "produto X" } });

    expect(input).toHaveValue("produto X");
  });
});
