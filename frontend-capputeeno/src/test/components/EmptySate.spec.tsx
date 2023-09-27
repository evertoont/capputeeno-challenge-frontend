import { EmptyState } from "@/components/EmptyState";
import { render } from "@testing-library/react";

describe("EmptyState", () => {
  it("should render EmptyState correctly", () => {
    const { container } = render(
      <EmptyState>
        <h3>Seu carrinho está vazio</h3>
      </EmptyState>
    );

    expect(container).toMatchSnapshot();
  });
});
