import styled from "styled-components";
import {
  HiOutlineHome,
  HiCalendarDays,
  HiOutlineHomeModern,
  HiOutlineUser,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const MainNav = () => {
  return (
    <nav>
      <NavItems>
        <li>
          <StyledNavLink to="/dashboard">
            <HiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/bookings">
            <HiCalendarDays />
            <span>Bookings</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/cabins">
            <HiOutlineHomeModern />
            <span>Cabins</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/users">
            <HiOutlineUser />
            <span>Users</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings">
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </NavItems>
    </nav>
  );
};

//-----------Styling------------
const NavItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 5rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    gap: 1.5rem;
    align-items: center;

    font-weight: 500;
    font-size: 2rem;
    color: var(--color-grey-600);
    transition: all 0.5s;
    padding: 1.2rem;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.3rem;
    height: 2.3rem;
    border: 1px solid var(--color-grey-50);
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-700);
  }
`;

export default MainNav;
