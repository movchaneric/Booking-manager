import styled from "styled-components";
import Heading from "../components/Heading";
import Row from "../components/Row";
import DashboardLayout from "../features/dashboard/DashboardLayout";

const Dashboard = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <div>Filter 7/30/90 Days</div>
      </Row>
      <DashboardLayout/>
    </>

  );
};


export default Dashboard;
