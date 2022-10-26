import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { conn } from "../../../util/db/connect";
import clientPromise from "../../../util/db/mongodb";
import User from "../../../model/User";

export default NextAuth({
    providers: [
        EmailProvider({
            server: process.env.EMAIL_SERVER,
            from: process.env.EMAIL_FROM
        }),

    ],
    secret: process.env.SECRET,
    adapter: MongoDBAdapter(clientPromise),
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        async session ({ session, token }) {
            await conn();
            const result = await User.findById(token.sub);
            session.user = result;
            return session;
        },
    },
})