import { HiMiniArrowRightOnRectangle, HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
import { useUser } from "../features/authentication/hooks/useUser";
import { useLogout } from "../features/authentication/hooks/useLogout";
import DarkModeToggle from "./DarkModeToggle";

const HeaderMenu = () => {
  const navigate = useNavigate();
  const {user} = useUser()
  const userId = user._id;
  
  const {logout, isLoading} = useLogout()
  
  return (
    <StyledAccount>
      <p>{user.email.split('@')[0]}</p>

      <ButtonIcon onClick={() => navigate("/account")}>
        <HiOutlineUser />
      </ButtonIcon>

      <DarkModeToggle/>

      {/* Logout */}
      <ButtonIcon onClick={() => logout(userId)}>
        <HiMiniArrowRightOnRectangle />
      </ButtonIcon>
    </StyledAccount>
  );
};

const StyledAccount = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 2rem;
  background-color: var(--color-grey-0);
`;

export default HeaderMenu;
