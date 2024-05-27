import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.4rem 6rem;

      /* Box */
      background-color: var(--color-grey-50);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `}
  /* max-width: 120rem;

  display: flex;
  flex-direction: column;

  gap: 2.4rem;
  width: 120rem;
  font-size: 1.4rem; */

  &:last-child {
    background-color: var(--color-grey-50);
  }
`;
export default Form;
