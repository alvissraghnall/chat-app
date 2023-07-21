import { unstable_getServerSession } from "next-auth/next"
import { getToken } from "next-auth/jwt";
import authOptions from "../auth/[...nextauth].js";

const mdw = async (req, res) => {

    // const session = await unstable_getServerSession(req, res, authOptions)

    const token = await getToken({ req });

    if (token) {
        console.log("Token", JSON.stringify(token, null, 2));

    } else {
        res.status(401)
    }
    res.end();
}

export default mdw;