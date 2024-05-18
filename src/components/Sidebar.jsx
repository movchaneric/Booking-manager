import styled from "styled-components";
import Heading from "./Heading";
import Logo from "./Logo";
import MainNav from "./MainNav";

const Sidebar = () => {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
};

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 2px solid var(--color-grey-100);
  grid-row: 1 / 3;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Sidebar;
