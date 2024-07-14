import axios from "axios";

export async function updateData({fullName, userId}){
    try{
        await axios.post("http://localhost:8080/auth/update-user-data",{fullName, userId})
    }catch(err){
        console.log("error:", err);
        throw err; 
    }
}

