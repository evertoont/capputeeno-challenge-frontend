import { Error } from "../icons/error";
import { ErrorContainer, ErrorMessage } from "./styles";

interface EmptyStateProps {
  children?: React.ReactNode;
}

export function ErrorState(props: EmptyStateProps) {
  const { children } = props;

  return (
    <ErrorContainer data-testid="ErrorState">
      <ErrorMessage>{children}</ErrorMessage>
      <Error />
    </ErrorContainer>
  );
}
