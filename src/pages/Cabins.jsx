import Heading from "../components/Heading";
import CabinTable from "../features/cabins/CabinTable";
import Row from "../components/Row";
import AddCabin from "../features/cabins/AddCabin";

const Cabins = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>

      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
};

export default Cabins;
