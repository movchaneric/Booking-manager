import axios from "axios";

export async function getSettings() {
  try {
    const res = await axios.get("http://localhost:8080/settings");
    const resData = res.data.settings[0];

    return resData;
  } catch (err) {
    console.log("getSettings err: ", err);
  }
}

export async function updateSettings(value, field) {
  try {
    await axios.post("http://localhost:8080/update-settings", {
      value,
      field,
    });
  } catch (err) {
    console.log("getSettings err: ", err);
  }
}
