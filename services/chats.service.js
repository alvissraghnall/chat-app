import axios from "axios";
import { apiUrl } from ".";

export const userChats = async (id) => {
    return await fetch(`${apiUrl}/chat/${id}`, {
        method: "GET",
    }).then((res) => res.json());
}

export const searchForUser = async str => {
    return await axios.get(`${apiUrl}/chat/user/${str}`);
}