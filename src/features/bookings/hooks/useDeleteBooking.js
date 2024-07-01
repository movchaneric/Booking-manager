import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../../services/apiBookings";

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { mutate: deleteBooking, isLoading: isDeleting } = useMutation({
    mutationFn: (bookingId) => deleteBooking(bookingId),
    onSuccess: () => {
      toast.success("Booking has been deleted");
      queryClient.invalidateQueries(["bookings"]); //update booking list in the UI
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteBooking, isDeleting };
}
