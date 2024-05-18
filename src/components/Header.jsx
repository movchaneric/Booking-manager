import styled from "styled-components";
import Heading from "./Heading";

const Header = () => {
  return <StyledHeader>Header</StyledHeader>;
};

const StyledHeader = styled.div`
  background-color: blue;
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
`;

export default Header;
