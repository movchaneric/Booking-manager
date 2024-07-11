import styled from "styled-components";
import Heading from "./Heading";

const VerticalFormRow = ({ children, label }) => {
  return (
    <StyledVerticalFormRow>
      <Label>{label}</Label>
      {children}
    </StyledVerticalFormRow>
  );
};

const StyledVerticalFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;
`;

const Label = styled.div`
  font-weight: 500;
  font-size: 1.6rem;
`;

export default VerticalFormRow;
