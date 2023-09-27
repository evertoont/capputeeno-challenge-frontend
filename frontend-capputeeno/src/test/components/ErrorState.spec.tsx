import { render } from "@testing-library/react";
import { ErrorState } from "../../components/ErrorState";

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
