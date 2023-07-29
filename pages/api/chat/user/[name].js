import User from "../../../../model/User";
import { connectDB } from "../../../util/db/connect";

const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const handler = async function (req, res) {
    if(req.method === "GET") {
        try {
            const uname = req.query.name;
            User.find({
                name: new RegExp('^'+escapeRegExp(uname)+'$', "i")
            }, (err, doc) => {
                if (err) return res.status(422).json({
                    message: err.message
                })
                return res.status(200).json(doc);
            });
            
        } catch (error) {
            return res.status(500).json({
                message: "Internal Server Error!"
            });
        }
    }
    else {
        return res.status(405).json({
            message: "Method not supported!"
        });
    }
}

export default connectDB(handler);