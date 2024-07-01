import { useRef, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { formatCurrency, formatDate, getToday } from "../../utils/helpers";
import ContextMenu from "../../components/ContextMenu";
import {
  HiEllipsisVertical,
  HiEye,
  HiInboxArrowDown,
  HiMiniArchiveBox,
} from "react-icons/hi2";
import { Navigate, useNavigate } from "react-router-dom";

const BookingRow = ({ booking }) => {
  const [bookId, setBookId] = useState("");

  const [contextMenuPosition, setContextMenuPosition] = useState({
    top: 0,
    left: 0,
  });
  const bookingButtonRef = useRef();
  const navigate = useNavigate();

  // TEST PRINTS

  const {
    cabinPrice: amount,
    startDate,
    endDate,
    status,
    numOfNights,
  } = booking;

  const startYear = startDate.split("-")[0];
  const endYear = endDate.split("-")[0];
  const yearDuration = getToday() - startYear <= 0 ? 0 : endYear - startYear;

  function handleContext(bookingId) {
    setBookId(bookingId);

    const rect = bookingButtonRef.current.getBoundingClientRect();

    setContextMenuPosition({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
    });
  }

  function onClose() {
    console.log("clicked ouside context");
    setBookId("");
  }

  return (
    <StyledBookingRow>
      <Cabin>001</Cabin>
      <Guest>Eric movchan</Guest>
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
      <RowOptions
        onClick={() => handleContext(booking._id)}
        ref={bookingButtonRef}
      >
        <HiEllipsisVertical />
      </RowOptions>
      {bookId && (
        <ContextMenu
          onClose={onClose}
          bookingId={booking._id}
          position={contextMenuPosition}
        >
          <DetailsContainer>
            <DetailRow onClick={() => navigate(`/bookings/${bookId}`)}>
              <HiEye />
              <Text>Details</Text>
            </DetailRow>
            <DetailRow onClick={() => navigate(`/checkin/${bookId}`)}>
              <HiInboxArrowDown />
              <Text>Check in</Text>
            </DetailRow>
            <DetailRow>
              <HiMiniArchiveBox />
              <Text>Delete</Text>
            </DetailRow>
          </DetailsContainer>
        </ContextMenu>
      )}
    </StyledBookingRow>
  );
};

const Text = styled.span`
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--color-grey-600);
  display: flex;
  justify-content: start;
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: start;
  padding: 0 1rem 0 1rem;
  align-items: center;
  font-size: 1.6rem;
  color: var(--color-grey-500);
  gap: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: var(--color-grey-100);
    transition: all 0.3s;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  background-color: var(--color-grey-50);
`;

const RowOptions = styled.button`
  display: flex;
  justify-content: center;
  padding: 0.8rem;
  font-size: 2.4rem;
  background: none;
  border: none;
  padding: 0;
  outline: none;
  color: var(--color-grey-500);

  &:focus {
    outline: none; /* Ensures the outline is removed on focus */
  }

  &:hover {
    color: var(--color-grey-900);
    transition: all 0.3s;
  }
`;

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
  font-weight: 600;
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
