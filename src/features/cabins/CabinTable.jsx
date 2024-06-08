import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

import styled from "styled-components";
import CabinRow from "./CabinRow";
import Spinner from "../../components/Spinner";
import { useSearchParams } from "react-router-dom";

const CabinTable = () => {
  const { data: cabins, isLoading } = useQuery({
    queryKey: ["cabin"],
    queryFn: getCabins,
  });

  const [searchParams] = useSearchParams();

  // FILTER
  const filterValue = searchParams.get("discount") || "all";

  let filteredCabins;
  if (filterValue === "all") filteredCabins = cabins;
  if (filterValue === "no-discount") {
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  }
  if (filterValue === "with-discount") {
    filteredCabins = cabins.filter((cabin) => cabin.discount > 1);
  }

  // SORT
  const sortValue = searchParams.get("sort-by") || "";

  const [field, direction] = sortValue.split("-");

  console.log(field, " | ", direction);

  const sortedCabins = filteredCabins?.sort((a, b) => b[field] - a[field]);
  // console.log(filteredCabins[0]);

  if (direction === "desc") {
    const sortedCabins = filteredCabins.sort((a, b) => a[field] - b[field]);
    console.log("sorted DESC:", sortedCabins);
  }

  console.log(sortedCabins);

  // console.log(sortedCabins);

  if (isLoading) return <Spinner />;
  if (sortedCabins.length === 0)
    return <div>No data to show at the moment</div>;
  return (
    <>
      <Table>
        <TableHeader role="header">
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
        </TableHeader>
        {sortedCabins?.map((cabin) => (
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
