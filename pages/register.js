import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function RegisterPage() {

  const [userForm, setUserForm] = useState({
    name: "",
    dob: "",
    phone: "",
    email: "",
    address: "",
    apptDate: "",
    apptTime: "",
    img: "",
  })

  const handleSubmit = (e) => {

  }

    const handleChange = (e) => {
    
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Done Demo Patient Register</title>
      </Head>
      <p className={styles.description}>
        Patient Register
      </p>
      <userForm onSubmit={handleSubmit}>
        <label htmlFor="nameLbl">Name</label>
        <input
          type="text"
          maxLength="20"
          name="nameField"
          value={userForm.name}
          onChange={handleChange}
          />
        <p/>
        <label htmlFor="dobLbl">D.O.B. (MM/DD/YYYY)</label>
        <input
          type="text"
          maxLength="20"
          name="dobField"
          value={userForm.dob}
          onChange={handleChange}
          />
        <p/>
        <label htmlFor="phoneLbl">Phone ((xxx)-xxx-xxxx)</label>
        <input
          type="text"
          maxLength="20"
          name="phoneField"
          value={userForm.phone}
          onChange={handleChange}
          />
        <p/>
        <label htmlFor="emailLbl">Email</label>
        <input
          type="text"
          maxLength="20"
          name="emailField"
          value={userForm.email}
          onChange={handleChange}
          />
        <p/>
        <label htmlFor="addressLbl">Address</label>
        <input
          type="text"
          maxLength="200"
          name="addressField"
          value={userForm.address}
          onChange={handleChange}
          />
        <p/>
        <label htmlFor="apptDateLbl">Appt Date (MM/DD/YYYY)</label>
        <input
          type="text"
          maxLength="20"
          name="apptDateField"
          value={userForm.apptDate}
          onChange={handleChange}
          />
        <p/>
        <label htmlFor="apptTimeLbl">Appt Time HH:MM PST</label>
        <input
          type="text"
          maxLength="20"
          name="apptTimeField"
          value={userForm.apptTime}
          onChange={handleChange}
          />
        <p/>
        <label htmlFor="imgLbl">Image Path</label>
        <input
          type="text"
          maxLength="20"
          name="imgField"
          value={userForm.img}
          onChange={handleChange}
          />
        <p/>
          <Link href="/">
            <button type="submit" className="submitBtn">Submit</button>
          </Link>
        </userForm>
    </div>
  )
}