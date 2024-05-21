import styled from "styled-components";

const FormRow = ({ children, label }) => {
  return (
    <StyledFormRow>
      <Label>{label}</Label>
      {children}
    </StyledFormRow>
  );
};

const StyledFormRow = styled.div`
  display: grid;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 3.2rem;
  align-items: center;
  padding: 1.2rem 0;

  border-bottom: 1px solid var(--color-grey-100);
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 1.6rem;
`;

export default FormRow;
