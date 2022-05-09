import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const adminUsername = "admin"
  const adminPassword = "1234"

  const handleChange = (e) => {
    const target = e.target
    if (target.name === "usernameField") {
      setUsername(target.value);
    } else {
      setPassword(target.value);
    }
  }

  const handleSubmit = (e) => {
    if (username === adminUsername && password === adminPassword) {

    }

    if (username !== adminUsername) {

    }
    if (password !== adminPassword) {

    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Done Demo Admin Login</title>
      </Head>
      <p className={styles.description}>
        Admin Login
      </p>

      <div className="authFields">
        <label htmlFor="usernameLbl">Username</label>
        <input
          type="text"
          maxLength="20"
          name="usernameField"
          value={username.name}
          onChange={handleChange}
          />
        <p/>
        <label htmlFor="passwordLbl">Password</label>
        <input
          type="text"
          maxLength="20"
          name="passwordField"
          value={password.name}
          onChange={handleChange}
          />
        <p/>
        <Link href="/viewPatients">
          <button type="submit" className="submitBtn">Submit</button>
        </Link>
      </div>
    </div>
  )
}