import styled from "styled-components";

import { formatCurrency } from "../../utils/helpers";
import { useQueryClient } from "@tanstack/react-query";

import Button from "../../components/Button";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import {
  HiArchiveBox,
  HiBars3,
  HiOutlineDocumentDuplicate,
  HiPencil,
  HiSquare2Stack,
} from "react-icons/hi2";
import useCreateCabin from "./useCreateCabin";
import useDeleteCabin from "./useDeleteCabin";
import Modal from "../../components/Modal";
import CabinDeletForm from "./CabinDeleteForm";
import ContextMenu from "../../components/ContextMenu";
import Heading from "../../components/Heading";

const CabinRow = ({ cabin }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isDeleteOpenModal, setIsDeleteOpenModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { createCabin, isCreating } = useCreateCabin();
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
    createCabin({
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
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>-</span>
        )}

        {/* BUTTONS */}
        <StyledButtons>
          {/* EDIT */}
          <Button
            size="medium"
            onClick={() => setIsOpenModal((prevState) => !prevState)}
          >
            <HiPencil />
            {/* Open edit Modal when edit button is clicked */}
            {isOpenModal && (
              <Modal
                onClose={() => setIsOpenModal(false)}
                isOpenModal={isOpenModal}
              >
                <CreateCabinForm
                  cabinToEdit={cabin}
                  onCloseModal={() => setIsOpenModal(false)}
                  isModal={isOpenModal}
                />
              </Modal>
            )}
          </Button>

          {/* DUPLICATE */}
          <Button
            onClick={handleCabinDuplicate}
            disabled={isCreating}
            size="medium"
          >
            <HiSquare2Stack />
          </Button>

          {/* DELETE */}
          <Button
            variation="danger"
            size="medium"
            onClick={() => setIsDeleteOpenModal((prevState) => !prevState)}
            disabled={isDeleting}
          >
            <HiArchiveBox />

            {/* Open delete modal form */}
            {isDeleteOpenModal && (
              <Modal
                onClose={() => setIsOpenModal(false)}
                isOpenModal={isOpenModal}
              >
                <CabinDeletForm onConfirm={() => deleteCabin(cabinId)} />
              </Modal>
            )}
          </Button>
        </StyledButtons>
        {/* Context Menu */}
      </TableRow>
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

const Price = styled.div`
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
