// import { getToken } from 'next-auth/jwt'
// import { NextResponse } from 'next/server'

// export async function middleware (req) {
//   const session = await getToken({
//     req,
//     secret: process.env.SECRET,
//     secureCookie: process.env.NEXTAUTH_URL?.startsWith('https://')
//   })

//   if (!session) return NextResponse.redirect('/api/auth/signin')
// }

const mdw = () => {};

export default mdw;

// export { default } from "next-auth/middleware";