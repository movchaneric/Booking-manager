import styled from "styled-components";
import Row from "../../components/Row";
import { useEffect } from "react";
import { getBookings } from "../../services/apiBookings";
import { useQuery } from "@tanstack/react-query";
import BookingRow from "./BookingRow";
import Spinner from "../../components/Spinner";

const BookingTable = () => {
  const { data: bookings, isLoading } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });

  if (isLoading) return <Spinner />;

  return (
    <StyledBookingTable>
      <BookingTableHeader>
        <div>cabin</div>
        <div>guest</div>
        <div>dates</div>
        <div>status</div>
        <div>amout</div>
        <div></div>
      </BookingTableHeader>
      {bookings?.map((booking) => (
        <BookingRow booking={booking} key={booking._id} />
      ))}
    </StyledBookingTable>
  );
};

const StyledBookingTable = styled.div`
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const BookingTableHeader = styled.header`
  display: grid;
  grid-template-columns: 1.2fr 3fr 4fr 2fr 1fr 1fr;
  justify-items: center;
  gap: 2.4rem;
  padding: 1.6rem 2.4rem;
  font-weight: 600;
  text-transform: uppercase;
`;

export default BookingTable;
