import Heading from "../components/Heading";
import Row from "../components/Row";
import BookingTable from "../features/bookings/BookingTable";
import CabinTableOperations from "../components/CabinTableOperations";

const Bookings = () => {
  const filterOptions = [
    { value: "all", label: "All" },
    { value: "checked-out", label: "Checked out" },
    { value: "checked-in", label: "Checked in" },
    { value: "unconfirmed", label: "Unconfirmed" },
  ];

  const sortByOptions = [
    { value: "startDate-latest", label: "Sort by date (recent first)" },
    { value: "startDate-first", label: "Sort by date (earliest first)" },
    { value: "cabinPrice-desc", label: "Sort by amount (highest first)" },
    { value: "cabinPrice-asc", label: "Sort by amount (lowest first)" },
  ];
  return (
    <div>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <CabinTableOperations
          filterOptions={filterOptions}
          sortByOptions={sortByOptions}
          field="status"
        />
      </Row>

      <Row>
        <BookingTable />
      </Row>
    </div>
  );
};

export default Bookings;
