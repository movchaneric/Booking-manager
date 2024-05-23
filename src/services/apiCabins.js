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

export async function addNewCabin(newCabin) {
  const { name, maxCapacity, regularPrice, discount, description, image } =
    newCabin;

  try {
    const response = await axios.post(`http://localhost:8080/cabin`, {
      name,
      maxCapacity,
      regularPrice,
      discount,
      description,
      image,
    });
    console.log("add cabin response: ", response);
    return response;
  } catch (err) {
    console.log("addNewCabin error: ", err);
  }
}

export async function updateCabin(data, cabinId) {
  console.log("updated data: ", data); // ok
  console.log("id: ", cabinId); //ok

  try {
    await axios.put(`http://localhost:8080/edit-cabin/${cabinId}`, data);
  } catch (err) {
    console.log("editCabin error: ", err);
  }
}
