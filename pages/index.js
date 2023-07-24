import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useSession, getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import GetStarted from '../components/GetStarted';

const Loading = () => {
  return (
    <div className="bg-gray-200 w-full min-h-screen flex justify-center items-center">
      <svg fill="none" className="w-24 h-24 animate-bounce" viewBox="0 0 24 24">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 18.25c3.5 0 7.25-1.75 7.25-6.25S15.5 5.75 12 5.75 4.75 7.5 4.75 12c0 1.03.196 1.916.541 2.67.215.47.336.987.24 1.495l-.262 1.399a1 1 0 001.168 1.167l3.207-.602a2.24 2.24 0 01.764-.003c.527.084 1.062.124 1.592.124z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.5 12a.5.5 0 11-1 0 .5.5 0 011 0zM12.5 12a.5.5 0 11-1 0 .5.5 0 011 0zM15.5 12a.5.5 0 11-1 0 .5.5 0 011 0z"
        ></path>
      </svg>
    </div>
  );
}

export default function Home() {

  const navigate = useRouter();

  const { data: session, status } = useSession()

  switch (status) {
    case "loading":
      console.log("fire 1")
      return <Loading />;


    case "authenticated":
      console.log("fire 2", session);
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
