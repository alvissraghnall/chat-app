import axios from "axios";
import { apiUrl } from ".";

export const userChats = async (id) => {
    return await fetch(`${apiUrl}/chat/${id}`, {
        method: "GET",
    }).then((res) => res.json());
}

export const searchForChatOrUser = async str => {
    return await axios.get(`${apiUrl}/search?query=${encodeURIComponent(query)}`);
}