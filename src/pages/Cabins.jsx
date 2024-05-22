import Heading from "../components/Heading";
import CabinTable from "../features/cabins/CabinTable";
import Row from "../components/Row";
import Button from "../components/Button";
import { useState } from "react";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

const Cabins = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>

      <Row>
        <CabinTable />

        {/* add new cabin */}
        <Button onClick={() => setShowForm((prevState) => !prevState)}>
          Add new cabin
        </Button>
        {showForm && <CreateCabinForm setShowForm={setShowForm} />}
      </Row>
    </>
  );
};

export default Cabins;
