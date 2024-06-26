import { useQuery } from "@tanstack/react-query";
import { getBookingId } from "../../../services/apiBookings";
import { useParams } from "react-router-dom";

export function useBooking() {
  const { bookId } = useParams();
  console.log("useBooking id: ", bookId);
  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking"],
    queryFn: () => getBookingId(bookId),
  });

  return { isLoading, error, booking };
}
