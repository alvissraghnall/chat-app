import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "../components/ChatFeed"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Maxi Chat App</title>
        <meta name="description" content="Chat Application built on NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ChatEngine 
        height="100vh"
        projectId=""
        userName=""
        userSecret=""
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  )
}
