import Room from "../../model/ChatRoom";

const handler = async (req, res) => {

    switch (req.method) {
        case "POST":
            const newChat = new Room({
                members: [req.body.senderId, req.body.receiverId, ...req.body ]
            });
            try {
                const savedChat = await newChat.save();
                return res.status(201).json(savedChat);

            } catch (error) {
                return res.status(500).json({
                    message: "Internal Server Error!"
                })
            }

        default:
            return res.status(422).json({
                message: "Method not supported!"
            })
    }
}