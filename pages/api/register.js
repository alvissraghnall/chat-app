import { connectDB } from "../../util/db/connect";
import User from "../../model/User";
import { allValidate } from "../../util/form/validators";
import BadRequestError from "../../util/errors/BadRequestError";
// import { hash } from "../../util/db/hash-password";

const handler = async (req, res) => {

    switch (req.method) {
        case "POST":
            try {
                const datas = req.body;
                const valid = allValidate(datas);
                console.log(datas, valid);
                if (!valid) throw new BadRequestError("Please fill out form correctly and resubmit.");

                const user = new User(datas);

                const createdUser = await user.save();

                return res.status(201).json({
                    message: "User: @" + datas.name + " created successfully."
                });
            } catch (error) {
                
                if (error instanceof BadRequestError) {
                    return res.status(400).json({
                        message: error.message
                    });
                }
                console.log(error.message);
                return res.status(500).json({
                    message: "Internal Server Error"
                })
            }
            
            break;
    
        default:
            res.status(422).json({
                message: "Request method not supported."
            })
            break;
    }
}

export default connectDB(handler);