import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Row from "./Row";
import styled from "styled-components";

const AppLayout = () => {
  return (
    <StyledApplayout>
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </StyledApplayout>
  );
};

const StyledApplayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.div`
  background-color: red;
  padding: 4rem 4.8rem 6.4rem;
`;

export default AppLayout;
