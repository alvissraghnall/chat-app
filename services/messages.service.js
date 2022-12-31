import { apiUrl } from ".";
import axios from "axios";

export const getMessages = async (id) => {
    return await fetch(`${apiUrl}/message/${id}`, {
        method: "GET",
    }).then((res) => res.json());
};

export const addNewMessage = async msg => {
    return await axios.post(`${apiUrl}/message`, msg);
}