import styled from "styled-components";

const DashboardLayout = () => {
  return (
    <StyledDashboardLayout>
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
      <div>Fourth</div>
    </StyledDashboardLayout>
  )
};

const StyledDashboardLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto 34rem auto;
    gap: 2.4rem;
`

export default DashboardLayout;
