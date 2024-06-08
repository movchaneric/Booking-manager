import Heading from "../components/Heading";
import Row from "../components/Row";
import BookingTable from "../features/bookings/BookingTable";

const Bookings = () => {
  return (
    <div>
      <Row as="horizontal">
        <Heading as="h1">All bookings</Heading>
      </Row>

      <Row>
        <BookingTable />
      </Row>
    </div>
  );
};

export default Bookings;
