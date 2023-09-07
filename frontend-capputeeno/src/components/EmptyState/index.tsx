import { Empty } from "../icons/empty";
import { EmptyContainer, EmptyMessage } from "./styles";

interface EmptyStateProps {
  message?: string;
}

export function EmptyState(props: EmptyStateProps) {
  const { message } = props;

  return (
    <EmptyContainer>
      <EmptyMessage>{message}</EmptyMessage>
      <Empty />
    </EmptyContainer>
  );
}
