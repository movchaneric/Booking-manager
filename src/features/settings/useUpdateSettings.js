import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSettings as updateSettingsAPI } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function useUpdateSettings() {
  const queryClient = useQueryClient();
  const { mutate: updateSettings, isLoading: isUpdating } = useMutation({
    mutationFn: ({ value, field }) => updateSettingsAPI(value, field),
    onSuccess: () => {
      toast.success("Settings has been updated");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateSettings, isUpdating };
}
