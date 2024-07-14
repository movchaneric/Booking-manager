import axios from "axios";
import { jwtDecode } from "jwt-decode";

export async function postLogin({ email, password }) {
  try {
    const { data } = await axios.post("http://localhost:8080/auth/login", {
      email,
      password,
    }); 
    
    localStorage.setItem("profile", JSON.stringify(data));
    
    return data;
  } catch (err) {
    console.log("error:", err);
    throw err; 
  }
}

export async function postUserRegister({fullName, email, password}){
  try{
    await axios.post("http://localhost:8080/auth/register", {fullName, email, password})
  }catch(err){
    console.log("error:", err);
    throw err; 
  }
}

export async function postLogout(userId){
  console.log(userId)
  try{
    const resp = await axios.post("http://localhost:8080/auth/logout", {userId})
    console.log(resp)
    localStorage.removeItem("profile");
  }catch(err){
    console.log("ERROR: ", err)
    throw err;
  }
}

export async function getCurrentUser(userId){
  try{
    //get user with http get call 
    //store the userId that is currently in the localStorage
    //get the latest user data
    //Update localStorage ("profile") with the new user.
    //return the new user.
    // const res = await axios.get("http://localhost:8080/auth/user",userId)
    // console.log(res)

    const data = localStorage.getItem("profile");
    const user = JSON.parse(data)

    //JWT token verification
    const token = user.token;
    
    const decodedToken = jwtDecode(token);
  
    // Current time in seconds
    const currentTime = Math.floor(Date.now() / 1000); 

    // Token has expired
    if (decodedToken.exp < currentTime) {
      localStorage.removeItem("profile");
      return null;
    }

    return user?.user;
  }catch(err){
    console.log('ERROR: ', err.message);
    throw err
  }
}

