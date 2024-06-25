import axios from "axios";
import { BOOKING_PER_PAGE } from "../utils/constants";

export async function getBookings(page) {
  console.log("current-page: ", page);

  try {
    const res = await axios.get("http://localhost:8080/bookings");
    const bookings = res.data.bookings;
    console.log(bookings);
    return bookings;
  } catch (err) {
    console.log("getBookings err: ", err);
  }
}

// if pages exists ( pagination )
// if (page) {
//   const startIndex = (page - 1) * BOOKING_PER_PAGE;
//   const endIndex = startIndex + BOOKING_PER_PAGE;
//   // const endIndex =
//   //   BOOKING_PER_PAGE * page > bookings?.length
//   //     ? bookings.length
//   //     : BOOKING_PER_PAGE * page;

//   let paginationBookings = bookings.slice(startIndex, endIndex);
//   console.log(paginationBookings);
//   return paginationBookings;
// } else {
//   return bookings;
// }

// return resData.slice(bookingStartIndex, bookingEndIndex);
