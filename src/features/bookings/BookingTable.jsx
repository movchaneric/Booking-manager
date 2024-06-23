import styled from "styled-components";
import { getBookings } from "../../services/apiBookings";
import { useQuery } from "@tanstack/react-query";
import BookingRow from "./BookingRow";
import Spinner from "../../components/Spinner";
import { useSearchParams } from "react-router-dom";

const BookingTable = () => {
  const { data: bookings, isLoading } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });

  console.log("bookings: ", bookings);

  const [searchParams] = useSearchParams();

  //FILTER
  const filterValue = searchParams.get("status") || "all";
  let filteredBookings;
  console.log("filterValue: ", filterValue);
  if (filterValue === "all") filteredBookings = bookings;
  else if (filterValue === "checked-out") {
    filteredBookings = bookings.filter((book) => book.status === "checked out");
  } else if (filterValue === "checked-in") {
    filteredBookings = bookings.filter((book) => book.status === "checked in");
  }

  //SORTBY query param
  const sortValue = searchParams.get("sort-by") || "date-latest";

  let bookingData;

  const [field] = sortValue.split("-");

  if (sortValue === "cabinPrice-desc") {
    bookingData = filteredBookings?.sort((a, b) => b[field] - a[field]);
  } else if (sortValue === "cabinPrice-asc") {
    bookingData = filteredBookings?.sort((a, b) => a[field] - b[field]);
  } else if (sortValue === "startDate-latest") {
    bookingData = filteredBookings?.sort((a, b) => b[field] - a[field]);
  } else {
    bookingData = filteredBookings?.sort((a, b) => a[field] - b[field]);
  }

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
      {filteredBookings?.map((booking) => (
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
  margin: 0.4rem 0;
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
