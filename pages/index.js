import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Done Demo Home</title>
      </Head>
      <p className={styles.description}>
        Welcome!
      </p>

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
