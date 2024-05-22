import styled from "styled-components";

const Form = styled.form`
  padding: 2.4rem 6rem;
  display: flex;
  flex-direction: column;

  gap: 2.4rem;
  width: 120rem;
  font-size: 1.4rem;

  background-color: var(--color-grey-50);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  &:last-child {
    background-color: var(--color-grey-50);
  }
`;
export default Form;
