import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useBooking } from "../bookings/hooks/useBooking";
import Spinner from "../../components/Spinner";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import styled from "styled-components";

import BookingDetailBox from "../bookings/BookingDetailBox";
import Checkbox from "../../components/CheckBox";
import { formatCurrency } from "../../utils/helpers";
import { useCheckin } from "./hooks/useCheckIn";

const CheckInBooking = () => {
  const navigate = useNavigate();
  const { bookingCheckIn, isCheckingIn } = useCheckin();
  const [wantBreakfast, setWantBreakfast] = useState(false);
  const { bookId } = useParams();

  const { booking, isLoading } = useBooking();

  if (isLoading) return <Spinner />;

  const {
    extrasPrice: breakfastPrice,
    isPaid,
    totalPrice,
    hasBreakfast,
    status,
  } = booking;

  

  function handleBreakfast() {
    setWantBreakfast((prevState) => !prevState);
  }

  return (
    <>
      <HeaderContainer>
        <HeaderLeft>
          <Heading as="h1">Check-in booking #{bookId?.slice(1, 7)}</Heading>
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

        <Box>
          <Checkbox
            bookId={bookId}
            checked={wantBreakfast}
            onChange={handleBreakfast}
            disabled={hasBreakfast || status === "checked in"}
          >
            Want to add breakfast for {formatCurrency(breakfastPrice)}
          </Checkbox>
        </Box>

        <Box>
          <Checkbox disabled={status === "checked in"}>
            I confirm that Eric Movchan has paid the total amount of{" "}
            <span> </span>
            {formatCurrency(totalPrice)}
            {wantBreakfast && (
              <span>
                ( {formatCurrency(totalPrice)} +{" "}
                {formatCurrency(breakfastPrice)})
              </span>
            )}
          </Checkbox>
        </Box>
      </MainConatiner>

      <ButtonContainer>
        <Button
          onClick={() => bookingCheckIn(bookId, wantBreakfast)}
          disabled={status === "checked in" ? true : false}
        >
          {status !== "checked in" ? (
            <p>Check in booking #{bookId?.slice(1, 7)} </p>
          ) : (
            <p>Checked in</p>
          )}
        </Button>
        <Button variation="secondary" onClick={() => navigate(`/bookings`)}>
          Back
        </Button>
      </ButtonContainer>
    </>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  padding: 2.4rem;
  gap: 2rem;
`;

const Box = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
  margin-top: 2rem;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  padding: 2.4rem 3.8rem;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
  font-size: 1.8rem;
  margin: 2rem;
`;

const Input = styled.input`
  width: 20px;
  height: 20px;
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

const MainConatiner = styled.div`
  border-radius: var(--border-radius-md);
  background-color: var(--color-grey-0);
  margin-top: 5rem;
`;

export default CheckInBooking;
