import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinAPI } from "../../services/apiCabins";
import toast from "react-hot-toast";

export default function useDeleteCabin() {
  const queryClient = useQueryClient();
  const { mutate: deleteCabin, isLoading: isDeleting } = useMutation({
    mutationFn: (id) => deleteCabinAPI(id),
    onSuccess: () => {
      toast.success("Cabin has been deleted.");
      queryClient.invalidateQueries(["cabin"]);
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteCabin, isDeleting };
}
