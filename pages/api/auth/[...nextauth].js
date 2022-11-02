import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { conn } from "../../../util/db/connect";
import mongoose from "mongoose";
import clientPromise from "../../../util/db/mongodb";
// import CredentialsUser from "../../../model/CredentialsUser";
// let User = mongoose.model("User");

const THIRTY_DAYS = 30 * 24 * 60 * 60
const THIRTY_MINUTES = 30 * 60

export default NextAuth({
    pages: {
        verifyRequest: "/verify-request",
        signIn: "/login"
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        EmailProvider({

        })

    ],
    secret: process.env.SECRET,
    adapter: MongoDBAdapter(clientPromise),
    session: {
        strategy: 'jwt',
        maxAge: THIRTY_DAYS,
        updateAge: THIRTY_MINUTES
    },
    callbacks: {
        async session ({ session, token }) {
            await conn();
            // const result = await User.findById(token.sub);
            // session.user = result;
            return session;
        },
    },
})


// async function checkUserExistence({ email }) {
//     await conn();
//     const user = CredentialsUser.findOne({ email });

//     if (!user) return null;
//     return user;
// }

function text ({ url, host }) {
    return `Sign in to ${host}\n${url}\n\n`
}