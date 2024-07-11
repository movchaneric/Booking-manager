import styled, { css } from "styled-components";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";

const BOOKING_PER_PAGE = 4;

const Pagination = ({ totalBookings, count }) => {
  
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  function nextPage() {
    const next = currentPage === totalBookings ? currentPage : currentPage + 1;
    searchParams.set("page", next); //updates the search param "page" variable to next
    setSearchParams(searchParams); //updates the URL itself
  }

  function prevPage() {
    const prev = currentPage === 1 ? 1 : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  const totalPages = Math.ceil(totalBookings / BOOKING_PER_PAGE); //4 bookings per page

  //If no pagination is needed
  if (totalPages <= 1) return null;

  return (
    <PeginationContainer>
      <div>
        <p>
          Showing{" "}
          <StyledSpan>{(currentPage - 1) * BOOKING_PER_PAGE + 1}</StyledSpan> to{" "}
          <StyledSpan>
            {currentPage === totalPages
              ? totalBookings
              : currentPage * BOOKING_PER_PAGE}
          </StyledSpan>{" "}
          of <StyledSpan>{totalBookings}</StyledSpan> results
        </p>
      </div>
      <StyledButtonContainer>
        <StyledButton onClick={prevPage} disabled={currentPage === 1}>
          <HiChevronLeft /> <span>Previous</span>
        </StyledButton>
        <StyledButton onClick={nextPage} disabled={currentPage === totalPages}>
          <span>Next</span>
          <HiChevronRight />
        </StyledButton>
      </StyledButtonContainer>
    </PeginationContainer>
  );
};

const StyledSpan = styled.span`
  font-weight: 600;
`;

const PeginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.6rem 2.4rem;
  align-items: center;
  background-color: var(--color-grey-50);
`;

const StyledButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  padding: 0.8rem;
  transition: all 0.4s;
  display: flex;
  justify-items: center;
  align-items: center;
  gap: 0.8rem;

  &:hover {
    background-color: var(--color-brand-600);
    color: white;
  }

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}
`;

const StyledButtonContainer = styled.div`
  display: flex;
  gap: 1.2rem;
`;

export default Pagination;
