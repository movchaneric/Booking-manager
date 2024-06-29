import axios from "axios";
import toast from "react-hot-toast";

export async function checkIn(bookingId, wantBreakfast) {
  try {
    const status = await axios.put(
      `http://localhost:8080/check-in/${bookingId}`,
      wantBreakfast
    );
    if (status === "success-booking-checkin") {
      toast.success("Succesfuly checked in");
    }
  } catch (err) {
    console.log("checkIn err: ", err);
    toast.error("Failed checking in");
  }
}
