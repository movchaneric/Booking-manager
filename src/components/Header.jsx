import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";


const Header = () => {
  //get logged in account
  return (
    <StyledHeader>
      <HeaderMenu />
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
`;

export default Header;
