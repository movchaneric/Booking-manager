import { useEffect } from "react";
import Heading from "../components/Heading";
import { getCabins } from "../services/apiCabins";
import CabinTable from "../features/cabins/CabinTable";
import Row from "../components/Row";

const Cabins = () => {
  // useEffect(() => {
  //   getCabins()
  //     .then((data) => console.log("Cabins fetch"))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>

      <Row as="horizontal">
        <CabinTable />
      </Row>
    </>
  );
};

export default Cabins;
