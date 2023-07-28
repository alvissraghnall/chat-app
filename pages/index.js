import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useSession, getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import GetStarted from '../components/GetStarted';
import SvgLogo from '../components/SvgLogo';
import 'react-toastify/dist/ReactToastify.css';

const Loading = () => {
  return (
    <div className="bg-gray-200 w-full min-h-screen flex justify-center items-center">
      <SvgLogo />
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
