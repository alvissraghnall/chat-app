import Head from 'next/head'
import styles from '../styles/Home.module.css';
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

export default function Home() {
  
  const navigate = useRouter();
  const { data: session, status } = useSession()

  switch(status) {
    case "loading":
      return <> Loading... </>

    case "authenticated":
      return navigate.push("/user")

    case "authenticated":
      return (
        <div className={styles.container}>
          <Head>
            <title>Maxi Chat App</title>
            <meta name="description" content="Maxi Chat Application" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
        </div>
      );

  }

  
}
