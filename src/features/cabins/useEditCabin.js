import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCabin as updateCabinAPI } from "../../services/apiCabins";

export function useEditCabin(editId) {
  const queryClient = useQueryClient();
  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: (data) => updateCabinAPI(data, editId),
    onSuccess: () => {
      toast.success("Cabin has been edited succesfuly");
      queryClient.invalidateQueries({ queryKey: ["cabin"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { editCabin, isEditing };
}
