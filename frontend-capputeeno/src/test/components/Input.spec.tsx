import { DefaultProviders } from "@/components/DefaultProviders";
import { Input } from "@/components/Input";
import { fireEvent, render } from "@testing-library/react";
import exp from "constants";

const mockFunction = jest.fn();

describe("Input", () => {
  it("should render Input correctly", () => {
    const { getByRole, getByPlaceholderText } = render(
      <DefaultProviders>
        <Input
          placeholder="Procurando por algo específico?"
          onChange={mockFunction}
        />
      </DefaultProviders>
    );

    expect(getByRole("textbox")).toBeInTheDocument();
    expect(
      getByPlaceholderText("Procurando por algo específico?")
    ).toBeInTheDocument();
  });

  it("should call onChange function when user types", () => {
    const { getByRole } = render(
      <DefaultProviders>
        <Input
          placeholder="Procurando por algo específico?"
          onChange={mockFunction}
        />
      </DefaultProviders>
    );

    const input = getByRole("textbox");

    fireEvent.change(input, { target: { value: "Produto X" } });

    expect(mockFunction).toBeCalledTimes(1);
    expect(input).toHaveValue("Produto X");
  });
});
