import styled from "styled-components";
import Row from "../../components/Row";
import { formatCurrency } from "../../utils/helpers";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

const CabinRow = ({ cabin }) => {
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

  const { mutate, isPending } = useMutation({
    mutationFn: (id) => deleteCabin(id),
    onSuccess: () => {
      toast.success("Cabin has been deleted");
      queryClient.invalidateQueries(["cabin"]);
    },
  });

  //isPending is used just to disable the delete button (UI)
  return (
    <StyledCabinRow>
      <Image src={image} alt={name} />
      <StyledRow>{name}</StyledRow>
      <StyledRow>{maxCapacity}</StyledRow>
      <StyledRow>{formatCurrency(regularPrice)}</StyledRow>
      <StyledRow>{formatCurrency(discount)}$</StyledRow>
      <button onClick={() => mutate(cabinId)} disabled={isPending}>
        Delete
      </button>
    </StyledCabinRow>
  );
};

const StyledCabinRow = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 0.4fr;
  gap: 2.4rem;
  padding: 1.6rem 2.4rem;

  background-color: white;
  border: 1px solid var(--color-grey-50);
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

export default CabinRow;
