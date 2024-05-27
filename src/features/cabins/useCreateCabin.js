import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewCabin as addNewCabinAPI } from "../../services/apiCabins";
import toast from "react-hot-toast";

export default function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: (newCabin) => addNewCabinAPI(newCabin),
    onSuccess: () => {
      toast.success("Cabin has been duplicated");
      queryClient.invalidateQueries({ queryKey: ["cabin"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createCabin, isCreating };
}
