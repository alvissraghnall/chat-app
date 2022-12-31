import { apiUrl } from ".";

export const userChats = async (id) => {
    return await fetch(`${apiUrl}/chat/${id}`, {
        method: "GET",
    }).then((res) => res.json());
}

