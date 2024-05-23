import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";
import { Ring } from "react-css-spinners";
import styled from "styled-components";
import CabinRow from "./CabinRow";

const CabinTable = () => {
  const { data: cabins, isLoading } = useQuery({
    queryKey: ["cabin"],
    queryFn: getCabins,
  });

  if (isLoading) return <Ring />;

  return (
    <>
      <Table role="table">
        <TableHeader role="header">
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
        </TableHeader>
        {cabins.map((cabin) => (
          <CabinRow cabin={cabin} key={cabin._id} />
        ))}
      </Table>
    </>
  );
};

//Styles
const Table = styled.div`
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  gap: 2.4rem;
  padding: 1.6rem 2.4rem;
  font-weight: 600;
  text-transform: uppercase;
`;

export default CabinTable;
