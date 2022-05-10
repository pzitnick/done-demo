import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  // Placeholders for the demo
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
      // I wanted to have this continue the routing to the next page, but
      // I'm not sure how to do this yet. 
    }

    if (username !== adminUsername) {
      // TODO: Error message and highlighting
    }
    if (password !== adminPassword) {
      // TODO: Error message and highlighting
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Done Demo Admin Login</title>
      </Head>
      {/* TODO format*/}
      <p className={styles.description}>
        Admin Login
      </p>

      {/*
        TODO formatting, but also proper authentication. From my brief research into this
        it looks like auth0 is a supported option. I'd want to look into that in order to do
        a real implementation. 
      */}
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
        {/* TODO format*/}
        <Link href="/viewPatients">
          <button type="submit" className="submitBtn">Submit</button>
        </Link>
      </div>
    </div>
  )
}