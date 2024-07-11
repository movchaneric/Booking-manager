import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingAPI } from "../../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteBooking, isLoading } = useMutation({
    mutationFn: (bookingId) => deleteBookingAPI(bookingId),
    onSuccess: () => {
      toast.success("Booking has been deleted");
      queryClient.invalidateQueries(["bookings"]); //update booking list in the UI
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteBooking, isLoading };
}
