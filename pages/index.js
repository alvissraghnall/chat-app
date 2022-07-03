import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ChatEngine } from "react-chat-engine";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Maxi Chat App</title>
        <meta name="description" content="Chat Application built on NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
    </div>
  )
}
