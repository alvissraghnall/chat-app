import Head from 'next/head'
import styles from '../styles/Home.module.css';
import { signOut, useSession, getSession } from 'next-auth/react'
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import GetStarted from '../components/GetStarted';

const Loading = () => {
  
}

export default function Home() {

  const navigate = useRouter();

  const { data: session, status } = useSession()

  switch (status) {
    case "loading":
      console.log("fire 1")
      return (
        <div class="bg-gray-200 w-full min-h-screen flex justify-center items-center">
          <svg class="w-24 h-24 animate-bounce" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18.25C15.5 18.25 19.25 16.5 19.25 12C19.25 7.5 15.5 5.75 12 5.75C8.5 5.75 4.75 7.5 4.75 12C4.75 13.0298 4.94639 13.9156 5.29123 14.6693C5.50618 15.1392 5.62675 15.6573 5.53154 16.1651L5.26934 17.5635C5.13974 18.2547 5.74527 18.8603 6.43651 18.7307L9.64388 18.1293C9.896 18.082 10.1545 18.0861 10.4078 18.1263C10.935 18.2099 11.4704 18.25 12 18.25Z"></path>
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 12C9.5 12.2761 9.27614 12.5 9 12.5C8.72386 12.5 8.5 12.2761 8.5 12C8.5 11.7239 8.72386 11.5 9 11.5C9.27614 11.5 9.5 11.7239 9.5 12Z"></path>
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 12C12.5 12.2761 12.2761 12.5 12 12.5C11.7239 12.5 11.5 12.2761 11.5 12C11.5 11.7239 11.7239 11.5 12 11.5C12.2761 11.5 12.5 11.7239 12.5 12Z"></path>
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 12C15.5 12.2761 15.2761 12.5 15 12.5C14.7239 12.5 14.5 12.2761 14.5 12C14.5 11.7239 14.7239 11.5 15 11.5C15.2761 11.5 15.5 11.7239 15.5 12Z"></path>
          </svg>
        </div>
      );


    case "authenticated":
      console.log("fire 2")
      navigate.push("/chat");
      return <></>;

    case "unauthenticated":
      console.log("fire 3")
      return (
        <div className={styles.container}>
          <Head>
            <title>Maxi Chat App</title>
            <meta name="description" content="Maxi Chat Application" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <GetStarted />

        </div>
      );
  }

  return (
    <>Starboy!!!</>
  );

}

// export const getServerSideProps = async ctx => {
//   // Check if the user is authenticated from the server
//   const session = await getSession(ctx)
//   if (!session) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/api/auth/signin"
//       },
//       props: {}
//     }
//   }
//   return {
//     props: {
//       session
//     }
//   }
// }
