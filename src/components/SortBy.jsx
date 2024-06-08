import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const SortBy = ({ options }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortByValue = searchParams.get("sort-by") || "name-asc";

  function onChange(e) {
    setSearchParams({ "sort-by": e.target.value });
  }

  return (
    <StyledSelect onChange={onChange} value={sortByValue}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

const StyledSelect = styled.select`
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  padding: 0.4rem;
  display: flex;
  gap: 1rem;

  font-weight: 500;
  font-size: 1.4rem;
  padding: 0.5rem;
`;

export default SortBy;
