import styled from "styled-components";

import { formatCurrency } from "../../utils/helpers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import Button from "../../components/Button";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";

const CabinRow = ({ cabin }) => {
  const [showForm, setShowForm] = useState(false);
  const {
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    _id: cabinId,
  } = cabin;

  //Used to mutation state in the queryClient
  const queryClient = useQueryClient();

  //Delete cabin
  const { mutate, isPending } = useMutation({
    mutationFn: (id) => deleteCabin(id),
    onSuccess: () => {
      toast.success("Cabin has been deleted.");
      queryClient.invalidateQueries(["cabin"]);
    },
    onError: (err) => toast.error(err.message),
  });

  //isPending is used just to disable the delete button (UI)
  return (
    <>
      <TableRow role="row">
        <Image src={image} alt={name} />
        <Cabin>{name}</Cabin>
        <Capacity>Fits up to {maxCapacity} guests</Capacity>
        <StyledRow>{formatCurrency(regularPrice)}</StyledRow>
        <Discount>{formatCurrency(discount)}</Discount>
        <StyledButtons>
          <Button
            variation="danger"
            size="small"
            onClick={() => mutate(cabinId)}
            disabled={isPending}
          >
            Delete
          </Button>
          <Button
            size="small"
            onClick={() => setShowForm((prevState) => !prevState)}
          >
            Update
          </Button>
        </StyledButtons>
      </TableRow>
      {showForm && <CreateCabinForm cabinToEdit={cabin} />}
    </>
  );
};

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;
const Capacity = styled.div`
  font-family: "Sono";
  font-weight: 500;
  font-size: 1.6rem;
`;
const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

const Image = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const StyledRow = styled.div`
  font-family: "sono";
  font-weight: 500;
  font-size: 1.6rem;
`;

const Cabin = styled.div`
  font-family: "sono";
  font-weight: 600;
  font-size: 1.6rem;
`;

const StyledButtons = styled.div`
  display: flex;
  gap: 1.2rem;
`;

export default CabinRow;
