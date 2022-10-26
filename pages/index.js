import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import { ChatEngine } from "react-chat-engine";
import ChatFeed from "../components/ChatFeed"
import { useState } from 'react'

export default function Home() {
  const [auth, setAuth] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Maxi Chat App</title>
        <meta name="description" content="Maxi Chat Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      

    </div>
  )
}
