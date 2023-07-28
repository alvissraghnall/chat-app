import { apiUrl } from ".";

export const getUser = async (id) => {
    return await fetch(`${apiUrl}/user/${id}`, {
        method: "GET",
    }).then((res) => res.json());
}

export const registerUser = async (data) => {
    return axios.post("/api/register", data);    
}