import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
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
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            httpOptions: {
                timeout: 40000,
            },
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
        EmailProvider({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT,
                auth: {
                  user: process.env.EMAIL_SERVER_USER,
                  pass: process.env.EMAIL_SERVER_PASSWORD
                }
            },
            from: process.env.EMAIL_FROM,

            async sendVerificationRequest ({
                identifier: email,
                url,
                provider: { server, from }
              }) {
                const { host } = new URL(url)
                const transport = nodemailer.createTransport(server)
                await transport.sendMail({
                  to: email,
                  from,
                  subject: `Sign in to ${host}`,
                  text: text({ url, host }),
                  html: html({ url, host, email })
                })
              }
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


function html ({ url, host, email }) {
    const escapedEmail = `${email.replace(/\./g, '&#8203;.')}`
    const escapedHost = `${host.replace(/\./g, '&#8203;.')}`
    // Your email template here
    return `
        <body>
          <h1>Your magic link! 🪄</h1>
          <h3>Your email is ${escapedEmail}</h3>
          <p>
            <a href="${url}">Sign in to ${escapedHost}</a>
        </body>
    `
  }

function text ({ url, host }) {
    return `Sign in to ${host}\n${url}\n\n`
}