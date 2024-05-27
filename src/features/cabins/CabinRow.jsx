import styled from "styled-components";

import { formatCurrency } from "../../utils/helpers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewCabin, deleteCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import Button from "../../components/Button";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import { HiArchiveBox, HiPencil, HiSquare2Stack } from "react-icons/hi2";
import useDuplicateCabin from "./useCreateCabin";
import { useDeleteCabin } from "./useDeleteCabin";

const CabinRow = ({ cabin }) => {
  //Used to mutation state in the queryClient
  const queryClient = useQueryClient();
  const [showForm, setShowForm] = useState(false);
  const { duplicateCabin, isDuplicating } = useDuplicateCabin();
  const { deleteCabin, isDeleting } = useDeleteCabin();

  const {
    _id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    description,
    image,
  } = cabin;

  const handleCabinDuplicate = () => {
    duplicateCabin({
      name: `Copy of ${cabin.name} cabin`,
      maxCapacity,
      regularPrice,
      discount,
      description,
      image,
    });
  };

  return (
    <>
      <TableRow role="row">
        <Image src={image} alt={name} />

        <Cabin>{name}</Cabin>
        <Capacity>Fits up to {maxCapacity} guests</Capacity>
        <StyledRow>{formatCurrency(regularPrice)}</StyledRow>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>-</span>
        )}
        <StyledButtons>
          {/* DELETE */}
          <Button
            variation="danger"
            size="small"
            onClick={() => deleteCabin(cabinId)}
            disabled={isDeleting}
          >
            <HiArchiveBox />
          </Button>

          {/* EDIT */}
          <Button
            size="small"
            onClick={() => setShowForm((prevState) => !prevState)}
          >
            <HiPencil />
          </Button>

          {/* DUPLICATE */}
          <Button onClick={handleCabinDuplicate} disabled={isDuplicating}>
            <HiSquare2Stack />
          </Button>
        </StyledButtons>
      </TableRow>
      {showForm && <CreateCabinForm cabinToEdit={cabin} />}
    </>
  );
};

// Styles
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
  border: 1px solid var(--color-grey-100);
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
