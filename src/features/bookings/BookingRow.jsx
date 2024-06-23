import styled, { css } from "styled-components";
import { formatCurrency, formatDate, getToday } from "../../utils/helpers";

const BookingRow = ({ booking }) => {
  //get the related cabin using react-query
  const {
    cabinPrice: amount,
    startDate,
    endDate,
    status,
    numOfNights,
  } = booking;

  const statusTag = {
    "checked in": "green",
    "checked out": "grey",
    unconfirmed: "blue",
  };

  const startYear = startDate.split("-")[0];
  const endYear = endDate.split("-")[0];

  const yearDuration = getToday() - startYear <= 0 ? 0 : endYear - startYear;

  return (
    <StyledBookingRow>
      <Cabin>001</Cabin>
      <Guest>Eden rubin movchan</Guest>
      <DatesStack>
        <DateHead>
          In {yearDuration} years &rarr; {numOfNights} nights stay
        </DateHead>
        <Dates>
          {formatDate(startDate)} - {formatDate(endDate)}{" "}
        </Dates>
      </DatesStack>
      <Status type={status}>{status}</Status>
      <Amount>{formatCurrency(amount)}</Amount>
    </StyledBookingRow>
  );
};

const StyledBookingRow = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 3fr 4fr 2fr 1fr 1fr;
  justify-items: center;
  column-gap: 2.4rem;
  align-items: center;
  padding: 2.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Cabin = styled.div`
  font-family: "sono";
  font-weight: 600;
  font-size: 1.6rem;
`;

const Guest = styled.div`
  font-weight: 500;
  font-size: 1.6rem;
`;

const DatesStack = styled.div`
  display: flex;
  flex-direction: column;
`;
const DateHead = styled.div`
  font-family: "sono";
  font-weight: 600;
  font-size: 1.5rem;
`;

const Dates = styled.div`
  color: var(--color-grey-400);
  display: flex;
  align-items: center;
  justify-items: center;
`;

const Status = styled.div`
  display: flex;
  font-size: 1.4rem;
  font-weight: 500;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-lg);
  text-transform: uppercase;

  ${(props) =>
    props.type === "unconfirmed" &&
    css`
      background-color: var(--color-blue-100);
      color: var(--color-blue-700);
    `}
  ${(props) =>
    props.type === "checked in" &&
    css`
      background-color: var(--color-green-100);
      color: var(--color-green-700);
    `}
  ${(props) =>
    props.type === "checked out" &&
    css`
      background-color: var(--color-silver-100);
      color: var(--color-silver-700);
    `}
`;
const Amount = styled.div`
  font-family: "sono";
  font-weight: 600;
  font-size: 1.6rem;
`;
export default BookingRow;
