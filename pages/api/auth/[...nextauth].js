import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { conn } from "../../../util/db/connect";
import mongoose from "mongoose";
import clientPromise from "../../../util/db/mongodb";
import nodemailer from "nodemailer";
import User from "../../../model/User";
// import CredentialsUser from "../../../model/CredentialsUser";
// let User = mongoose.model("User");

const THIRTY_DAYS = 30 * 24 * 60 * 60
const THIRTY_MINUTES = 30 * 60;

export const NextAuthOptions = {
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
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        }),
        EmailProvider({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT,
                auth: {
                  user: process.env.EMAIL_SERVER_USER,
                  pass: process.env.EMAIL_SERVER_PASSWORD
                },
                requireTLS: false,
                tls: {
                    ciphers: "SSLv3",
                    rejectUnauthorized: false,
                },
                service: "Outlook",
                connectionTimeout: 1000 * 60
            },
            from: process.env.EMAIL_FROM,

            async sendVerificationRequest ({
                identifier: email,
                url,
                provider: { server, from },
                theme
            }) {
                const { host } = new URL(url)
                // console.log(process.env);
                const transport = nodemailer.createTransport(server)
                await transport.sendMail({
                  to: email,
                  from,
                  subject: `Sign in to ${host}`,
                  text: text({ url, host }),
                  html: html({ url, host, email, theme })
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
            // await conn();
            // const result = await User.findById(token.sub);
            // session.user = result;
            if (session?.user) {
                session.user.id = token.uid;
            }
            return session;
        },

        async signIn({ user, account, email }) { 
            await conn(); 
            console.log(user, account, email);
            const userExists = await User.findOne({ 
              email: user.email,  //the user object has an email property, which contains the email the user entered.
            });
            if (userExists) {
              return true;   //if the email exists in the User collection, email them a magic login link
            } else {
              return "/register"; 
            }
        },
    },
    jwt: async ({ user, token }) => {
        if(user) token.uid = user.id;
        return token;
    }
}

export default NextAuth(NextAuthOptions);


// async function checkUserExistence({ email }) {
//     await conn();
//     const user = CredentialsUser.findOne({ email });

//     if (!user) return null;
//     return user;
// }


function html ({ url, host, email, theme }) {
    const escapedEmail = `${email.replace(/\./g, '&#8203;.')}`
    const escapedHost = `${host.replace(/\./g, '&#8203;.')}`
    // Your email template here
    const brandColor = theme.brandColor || "#346df1"
    const color = {
        background: "#f9f9f9",
        text: "#444",
        mainBackground: "#fff",
        buttonBackground: brandColor,
        buttonBorder: brandColor,
        buttonText: theme.buttonText || "#fff",
    }

  return `
    <body style="background: ${color.background};">
    <table width="100%" border="0" cellspacing="20" cellpadding="0"
        style="background: ${color.mainBackground}; max-width: 600px; margin: auto; border-radius: 10px;">
        <tr>
        <td align="center"
            style="padding: 10px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
            ${escapedEmail}, Sign in to <strong>${escapedHost}</strong>
        </td>
        </tr>
        <tr>
        <td align="center" style="padding: 20px 0;">
            <table border="0" cellspacing="0" cellpadding="0">
            <tr>
                <td align="center" style="border-radius: 5px;" bgcolor="${color.buttonBackground}"><a href="${url}"
                    target="_blank"
                    style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${color.buttonText}; text-decoration: none; border-radius: 5px; padding: 10px 20px; border: 1px solid ${color.buttonBorder}; display: inline-block; font-weight: bold;">Sign
                    in</a></td>
            </tr>
            </table>
        </td>
        </tr>
        <tr>
        <td align="center"
            style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
            If you did not request this email you can safely ignore it.
        </td>
        </tr>
    </table>
    </body>
    `
  }

function text ({ url, host }) {
    return `Sign in to ${host}\n${url}\n\n`
}