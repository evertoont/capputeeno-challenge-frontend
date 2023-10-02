import { Empty } from "../icons/empty";
import { EmptyContainer, EmptyMessage } from "./styles";

interface EmptyStateProps {
  children?: React.ReactNode;
}

export function EmptyState(props: EmptyStateProps) {
  const { children } = props;

  return (
    <EmptyContainer data-testid="EmptyState">
      <EmptyMessage>{children}</EmptyMessage>
      <Empty />
    </EmptyContainer>
  );
}
