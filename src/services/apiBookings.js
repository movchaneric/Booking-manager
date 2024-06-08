import axios from "axios";

export async function getBookings() {
  try {
    const res = await axios.get("http://localhost:8080/bookings");
    // console.log("getBookings res: ", res.data.bookings);
    return res.data.bookings;
  } catch (err) {
    console.log("getBookings err: ", err);
  }
}
