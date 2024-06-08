import styled from "styled-components";
import Filter from "./Filter";
import SortBy from "./SortBy";

const CabinTableOperations = () => {
  return (
    <OperationsContainer>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />

      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (a - z)" },
          { value: "name-desc", label: "Sort by name (z - a)" },
          { value: "regularPrice-asc", label: "Sort by price (high - low)" },
          { value: "regularPrice-desc", label: "Sort by price (low - high)" },
          { value: "maxCapacity-asc", label: "Sort by capacity (high - low)" },
          { value: "maxCapacity-desc", label: "Sort by capacity (low - high)" },
        ]}
      />
    </OperationsContainer>
  );
};

const OperationsContainer = styled.div`
  border-radius: 1px solid var(--color-grey-100);
  display: flex;
  gap: 1.2rem;
`;

export default CabinTableOperations;
