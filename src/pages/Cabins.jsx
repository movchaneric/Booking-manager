import Heading from "../components/Heading";
import CabinTable from "../features/cabins/CabinTable";
import Row from "../components/Row";
import AddCabin from "../features/cabins/AddCabin";
import { useEffect } from "react";
import CabinTableOperations from "../components/CabinTableOperations";
import styled from "styled-components";

const Cabins = () => {
  return (
    <>
      <CabinHeader>
        <Row type="horizontal">
          <Heading as="h1">All cabins</Heading>
          <CabinTableOperations />
        </Row>
      </CabinHeader>

      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
};
const CabinHeader = styled.div`
  margin-bottom: 2rem;
`;
export default Cabins;
