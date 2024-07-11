import styled from "styled-components";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import { useDeleteBooking } from "./hooks/useDeleteBooking";
import Spinner from "../../components/Spinner";

const BookingDelete = ({ bookingId, closeModal }) => {
  const { deleteBooking, isLoading: isDeleting } = useDeleteBooking();

  {
    isDeleting && <Spinner />;
  }

  return (
    <Container>
      <Heading as="h2">Delete cabin</Heading>
      <p>
        Are you sure you want to delete booking #{bookingId.slice(1, 6)}?
        <br />
        This action cannot be undone.
      </p>
      <ButtonsBox>
        <Button variation="secondary" onClick={closeModal}>
          Cancel
        </Button>
        <Button variation="danger" onClick={() => deleteBooking(bookingId)}>
          Delete
        </Button>
      </ButtonsBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`;

const ButtonsBox = styled.div`
  display: flex;
  justify-content: end;
  gap: 1rem;
`;
export default BookingDelete;
