import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Done Demo Home</title>
      </Head>

      {/*
        TODO I want to redo the style for these messages to match the paper
        prototype
      */}
      <p className={styles.description}>
        Welcome!
      </p>

      {/*
        TODO Format buttons
      */}
      <div>
        <Link href ="/login">
          <button className="loginBtn">Admin Login</button>
        </Link>
      </div>
      <div>
        <Link href ="/register">
          <button className="registerBtn">Patient Register</button>
        </Link>
      </div>
    </div>
  )
}
