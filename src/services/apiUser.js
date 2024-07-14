import axios from "axios";

export async function updateData({fullName, userId}){
    try{
        await axios.post("http://localhost:8080/auth/update-user-data",{fullName, userId})
    }catch(err){
        console.log("error:", err);
        throw err; 
    }
}

export async function updatePassword({userId, password}){
    try{
        await axios.post("http://localhost:8080/auth/update-password",{password, userId})
    }catch(err){
        console.log("error:", err);
        throw err; 
    }
}

