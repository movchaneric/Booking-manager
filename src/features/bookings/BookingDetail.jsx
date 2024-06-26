import styled, { css } from "styled-components";
// import { useQuery } from "@tanstack/react-query";
// import Header from "../../components/Header";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useBooking } from "./hooks/useBooking";
import BookingDetailBox from "./BookingDetailBox";
import Spinner from "../../components/Spinner";

const BookingDetail = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const { booking, isLoading } = useBooking();

  if (isLoading) return <Spinner />;

  const { status } = booking;

  return (
    <>
      {/* Header */}
      <HeaderContainer>
        <HeaderLeft>
          <Heading as="h1">Booking #{bookId.slice(1, 7)}</Heading>

          <Status type={status}>{status}</Status>
        </HeaderLeft>
        <Button
          variation="primary"
          size="large"
          onClick={() => navigate("/bookings")}
        >
          &larr; Back
        </Button>
      </HeaderContainer>

      {/* Main */}
      <MainConatiner>
        <BookingDetailBox booking={booking} />
      </MainConatiner>
    </>
  );
};

const MainConatiner = styled.div`
  border-radius: var(--border-radius-md);
  background-color: var(--color-grey-0);
  margin-top: 5rem;
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HeaderLeft = styled.div`
  display: flex;
  gap: 2rem;
`;
const Status = styled.div`
  display: flex;
  font-size: 1.4rem;
  font-weight: 500;
  margin-left: 1rem;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-lg);
  text-transform: uppercase;

  ${(props) =>
    props.type === "unconfirmed" &&
    css`
      background-color: var(--color-blue-100);
      color: var(--color-blue-700);
    `}
  ${(props) =>
    props.type === "checked in" &&
    css`
      background-color: var(--color-green-100);
      color: var(--color-green-700);
    `}
  ${(props) =>
    props.type === "checked out" &&
    css`
      background-color: var(--color-silver-100);
      color: var(--color-silver-700);
    `}
`;
export default BookingDetail;
