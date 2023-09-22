import { useProducts } from "@/hooks/useProducts";
import {
  FilterPaginationWrapper,
  PaginationButton,
  PaginationContainer,
  PaginationWrapper,
  PerPageText,
  SelectTotalPerPage,
} from "./styles";
import { useFilter } from "@/hooks/useFilter";
import { ArrowIcon } from "../icons/arrow";

interface PaginationProps {}

export function Pagination(props: PaginationProps) {
  const { perPage, setPerPage, page, setPage } = useFilter();
  const { totalProducts } = useProducts();

  const totalPages = totalProducts ? Math.ceil(totalProducts / perPage) : 0;

  const handleUpdatePerPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPage(0);
    setPerPage(Number(event.target.value));
  };

  const handleUpdatePage = (pageSet: number, isDisabled: boolean) => {
    if (isDisabled) return;

    setPage(pageSet);
  };

  return (
    <FilterPaginationWrapper>
      <PaginationWrapper>
        <PerPageText>Total por página: </PerPageText>
        <SelectTotalPerPage value={perPage} onChange={handleUpdatePerPage}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </SelectTotalPerPage>
      </PaginationWrapper>

      <PaginationContainer>
        {Array.from(Array(totalPages).keys()).map((_, index) => (
          <PaginationButton
            isActive={page === index}
            onClick={() => handleUpdatePage(index, page === index)}
            key={index}
            isDisabled={page === index}
          >
            {index + 1}
          </PaginationButton>
        ))}
        <PaginationButton
          isDisabled={page === 0}
          leftArrow
          onClick={() => handleUpdatePage(0, page === 0)}
        >
          <ArrowIcon />
        </PaginationButton>
        <PaginationButton
          rightArrow
          onClick={() =>
            handleUpdatePage(totalPages - 1, page === totalPages - 1)
          }
          isDisabled={page === totalPages - 1}
        >
          <ArrowIcon />
        </PaginationButton>
      </PaginationContainer>
    </FilterPaginationWrapper>
  );
}
