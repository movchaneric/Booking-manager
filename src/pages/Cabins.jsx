import Heading from "../components/Heading";
import CabinTable from "../features/cabins/CabinTable";
import Row from "../components/Row";
import AddCabin from "../features/cabins/AddCabin";
import { useEffect } from "react";
import CabinTableOperations from "../components/CabinTableOperations";
import styled from "styled-components";

const Cabins = () => {
  const filterOptions = [
    { value: "all", label: "All" },
    { value: "no-discount", label: "No discount" },
    { value: "with-discount", label: "With discount" },
  ];

  const sortByOptions = [
    { value: "name-asc", label: "Sort by name (a - z)" },
    { value: "name-desc", label: "Sort by name (z - a)" },
    { value: "regularPrice-asc", label: "Sort by price (high - low)" },
    { value: "regularPrice-desc", label: "Sort by price (low - high)" },
    { value: "maxCapacity-asc", label: "Sort by capacity (high - low)" },
    { value: "maxCapacity-desc", label: "Sort by capacity (low - high)" },
  ];

  return (
    <>
      <CabinHeader>
        <Row type="horizontal">
          <Heading as="h1">All cabins</Heading>
          <CabinTableOperations
            filterOptions={filterOptions}
            sortByOptions={sortByOptions}
            field="discount"
          />
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
