import { fireEvent, render } from "@testing-library/react";
import { BackButton } from "@/components/BackButton";
import { DefaultProviders } from "@/components/DefaultProviders";

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
      <DefaultProviders>
        <BackButton />
      </DefaultProviders>
    );

    expect(getByRole("button")).toBeInTheDocument();
    expect(getByText("Voltar")).toBeInTheDocument();
  });

  it("should call navigation back function", () => {
    const { getByRole } = render(
      <DefaultProviders>
        <BackButton />
      </DefaultProviders>
    );

    const button = getByRole("button");

    expect(button).toBeInTheDocument();

    fireEvent.click(button, "click");

    expect(mockFunction).toHaveBeenCalled();
  });
});
