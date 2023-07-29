import { apiUrl } from ".";
import axios from "axios";

export const getUser = async (id) => {
    return await fetch(`${apiUrl}/user/${id}`, {
        method: "GET",
    }).then((res) => res.json());
}

export const registerUser = async (data) => {
    console.log("re");
    return await axios.post("/api/register", data);
}