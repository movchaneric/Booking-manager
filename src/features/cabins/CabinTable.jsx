import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

import { Ring } from "react-css-spinners";
import styled from "styled-components";
import CabinRow from "./CabinRow";

const CabinTable = () => {
  const {
    data: cabins,
    isLoading,
    error,
  } = useQuery({ queryKey: ["cabin"], queryFn: getCabins });

  console.log(isLoading);

  if (isLoading) return <Ring />;

  return (
    <>
      <Table>
        <TableHeader>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
        </TableHeader>
        {cabins.map((cabin) => (
          <CabinRow cabin={cabin} key={cabin.name} />
        ))}
      </Table>
    </>
  );
};

//Styles
const Table = styled.div`
  border: 1px solid var(--color-grey-200);
  background-color: var(--color-grey-50);
  border-radius: 7px;
  overflow: auto; //auto scroll option
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 1fr;
  gap: 2.4rem;
  padding: 1.6rem 2.4rem;

  font-weight: 600;
  text-transform: uppercase;
`;

export default CabinTable;
