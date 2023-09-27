import { ErrorState } from "@/components/ErrorState";
import { render } from "@testing-library/react";

describe("ErrorState", () => {
  it("should render ErrorState correctly", () => {
    const { container } = render(
      <ErrorState>
        <h3>Ops! parece que algo deu errado.</h3>
      </ErrorState>
    );

    expect(container).toMatchSnapshot();
  });
});
