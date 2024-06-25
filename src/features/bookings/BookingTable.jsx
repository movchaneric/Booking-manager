import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import BookingRow from "./BookingRow";
import Spinner from "../../components/Spinner";
import Pagination from "../../components/Pagination";
import { BOOKING_PER_PAGE } from "../../utils/constants";

const BookingTable = () => {
  const [searchParams] = useSearchParams();

  // PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data: bookings, isLoading } = useQuery({
    queryKey: ["bookings", page],
    queryFn: () => getBookings(page),
    keepPreviousData: true,
  });

  // const bookingStartIndex = (page - 1) * BOOKING_PER_PAGE + 1;

  // const bookingEndIndex =
  //   page * BOOKING_PER_PAGE > bookings?.length
  //     ? bookings.length
  //     : page * BOOKING_PER_PAGE;

  // console.log("start: ", bookingStartIndex, " || end: ", bookingEndIndex); // WORK

  // FILTER
  let filteredBookings;

  // let paginatatedBookings;
  // if (page) {
  //   paginatatedBookings = bookings?.slice(
  //     bookingStartIndex,
  //     bookingEndIndex + 1
  //   );
  //   filteredBookings = paginatatedBookings;
  // }

  const filterValue = searchParams.get("status") || "all";

  if (filterValue === "all") filteredBookings = bookings;
  else if (filterValue === "checked-out") {
    filteredBookings = bookings.filter((book) => book.status === "checked out");
  } else if (filterValue === "checked-in") {
    filteredBookings = bookings.filter((book) => book.status === "checked in");
  }

  // SORTBY query param
  const sortValue = searchParams.get("sort-by") || "date-latest";

  let bookingData;

  const [field] = sortValue.split("-");

  if (sortValue === "cabinPrice-desc") {
    bookingData = filteredBookings?.sort((a, b) => b[field] - a[field]);
  } else if (sortValue === "cabinPrice-asc") {
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
        <BookingRow booking={booking} key={booking._id} id={booking._id} />
      ))}

      <Pagination
        totalBookings={filteredBookings?.length}
        count={bookings?.length}
      />
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
  background-color: var(--color-grey-100);
`;

export default BookingTable;
