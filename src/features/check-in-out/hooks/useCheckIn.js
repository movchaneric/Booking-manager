import { useMutation } from "@tanstack/react-query";
import { checkIn } from "../../../services/apiCheckInOut";
import toast from "react-hot-toast";

export function useCheckin() {
  const { mutate: bookingCheckIn, isLoading: isCheckingIn } = useMutation({
    mutationFn: (bookingId, wantBreakfast) => checkIn(bookingId, wantBreakfast),
    onSuccess: () => {
      toast.success("Succesfuly checked in");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { bookingCheckIn, isCheckingIn };
}
