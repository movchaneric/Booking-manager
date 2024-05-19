import axios from "axios";

export async function getCabins() {
  //use axios to get all cabins from the db.
  try {
    const res = await axios("http://localhost:8080/cabins");
    const cabins = res.data.cabins;
    return cabins;
  } catch (err) {
    console.log("getCabins err: ", err);
  }
}

export async function deleteCabin(cabinId) {
  try {
    const respose = await axios.delete(
      `http://localhost:8080/delete-cabin/${cabinId}`
    );
    return respose;
  } catch (err) {
    console.log("deleteCabin error", err);
  }
}
