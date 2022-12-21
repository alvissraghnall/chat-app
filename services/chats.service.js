export const apiUrl = process.env.NEXT_PUBLIC_URI + "/api";

export const userChats = async (id) => {
    return await fetch(`${apiUrl}/chats/${id}`, {
        method: "GET",
    }).then((res) => res.json());
}

export const getUser = async (id) => {
    return await fetch(`${apiUrl}/users/${id}`, {
        method: "GET",
    }).then((res) => res.json());
}