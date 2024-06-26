import axios from "axios";

export async function getBookings(page) {
  try {
    const res = await axios.get("http://localhost:8080/bookings");

    const bookings = res.data.bookings;

    return bookings;
  } catch (err) {
    console.log("getBookings err: ", err);
  }
}

export async function getBookingId(id) {
  try {
    const res = await axios.get(`http://localhost:8080/booking/${id}`);

    const booking = res.data.booking;

    return booking;
  } catch (err) {
    console.log("getBookingByIdr err: ", err);
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
