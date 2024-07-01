import styled from "styled-components";
import Heading from "../../components/Heading";
import Button from "../../components/Button";

const BookingDelete = ({ onConfirm, isDeleting, bookingId }) => {
  console.log(isDeleting);
  return (
    <Container>
      <Heading as="h2">Delete cabin</Heading>
      <p>
        Are you sure you want to delete booking #{bookingId}?
        <br />
        This action cannot be undone.
      </p>
      <ButtonsBox>
        <Button variation="secondary">Cancel</Button>
        <Button variation="danger" onClick={onConfirm}>
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
export default CabinDeleteForm;
