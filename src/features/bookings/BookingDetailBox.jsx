import styled from "styled-components";
import Button from "../../components/Button";
import DataItem from "../../components/DataItem";
import {
  HiOutlineHome,
  HiOutlineCurrencyDollar,
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

import { formatCurrency, formatDate } from "../../utils/helpers";
// import { format, isToday } from "date-fns";

const BookingDetailBox = ({ booking }) => {
  console.log("BookingDetailBox booking: ", booking);
  const {
    hasBreakfast,
    totalPrice,
    isPaid,
    extrasPrice,
    cabinPrice,
    observations,
  } = booking;

  return (
    <StyledBookingDetailBox>
      <DetailHeader>
        <DetailInfo>
          <HiOutlineHome />
          <StyledText>3 nights in Cabin 001</StyledText>
        </DetailInfo>
        <StyledText></StyledText>
      </DetailHeader>

      <DetailMain>
        <Guest>
          {/* Flag */}
          <p>Eric</p>
          <span>&bull;</span>
          <p>eric@gmail.com</p>
          <span>&bull;</span>
          <p>National ID 999</p>
        </Guest>

        {observations && (
          <DataItem
            icon={<HiOutlineChatBubbleBottomCenterText />}
            label="Observations"
          >
            {observations}
          </DataItem>
        )}

        <DataItem icon={<HiOutlineCheckCircle />} label="Breakfast included?">
          {hasBreakfast ? "Yes" : "No"}
        </DataItem>

        <Price isPaid={isPaid}>
          <DataItem icon={<HiOutlineCurrencyDollar />} label={`Total price`}>
            {formatCurrency(totalPrice)}

            {hasBreakfast &&
              ` (${formatCurrency(cabinPrice)} cabin + ${formatCurrency(
                extrasPrice
              )} breakfast)`}
          </DataItem>

          <p>{isPaid ? "Paid" : "Will pay at property"}</p>
        </Price>
      </DetailMain>

      <ButtonContainer>
        <Button>Check in</Button>
        <Button variation="danger">Delete booking</Button>
      </ButtonContainer>
    </StyledBookingDetailBox>
  );
};

const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 3.2rem;
  border-radius: var(--border-radius-sm);
  margin-top: 2.4rem;

  background-color: ${(props) =>
    props.isPaid ? "var(--color-green-100)" : "var(--color-yellow-100)"};
  color: ${(props) =>
    props.isPaid ? "var(--color-green-700)" : "var(--color-yellow-700)"};

  & p:last-child {
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 600;
  }

  svg {
    height: 2.4rem;
    width: 2.4rem;
    color: currentColor !important;
  }
`;

const DetailMain = styled.section`
  padding: 3.2rem 4rem 1.2rem;
`;
const Guest = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.7rem;
  gap: 1.2rem;
  margin-bottom: 1.8rem;
  color: var(--color-grey-500);

  & p:first-of-type {
    font-weight: 500;
    color: var(--color-grey-700);
  }
`;

const DetailHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem 2.6rem;
  background-color: var(--color-brand-500);
  border-top-left-radius: var(--border-radius-lg);
  border-top-right-radius: var(--border-radius-lg);
  color: var(--color-grey-200);
  font-size: 3rem;
`;

const StyledText = styled.span`
  display: flex;
  font-size: 2rem;
  font-weight: 500;
  ${(props) => props.size === "md"}
`;

const DetailInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1.8rem;
`;

const StyledBookingDetailBox = styled.div`
  border-radius: var(--border-radius-md);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  padding: 2.4rem;
  gap: 2rem;
`;

export default BookingDetailBox;
