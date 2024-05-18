import styled from "styled-components";
import Heading from "../components/Heading";
import Row from "../components/Row";

const Dashboard = () => {
  return (
    <Row type="horizontal">
      <Heading as="h1">Dashboard</Heading>
    </Row>
  );
};

const StyledDashboard = styled.div`
  background: yellow;
`;

export default Dashboard;
