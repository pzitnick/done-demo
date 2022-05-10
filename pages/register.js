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
    /*
      TODO: This would be where the userForm is placed in the database.
      There is a similar demo program made by Next.js that uses mongoDB that
      I think provides some good guidance on where to start to complete this implementation.
      I just ran out of time. But I would follow this example for learning purposes
      before optimizing: https://github.com/vercel/next.js/tree/canary/examples/with-mongodb-mongoose
    */
  }

  const handleChange = (e) => {
    /*
      TODO: check for valid values here and set states for each form array.
      Obviously the validation could get pretty complicated without definitions
      for expected ranges and contents. (for instance, valid phone numbers)
    */
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Done Demo Patient Register</title>
      </Head>
      {/* TODO format*/}
      <p className={styles.description}>
        Patient Register
      </p>

      {/* 
        TODO formatting, but also some thought needs to be put into
        maxLength for each value and whether types are correct. Further,
        I want to do exploration on how I can connect this with filepicker
        and datepicker functionality. I still need to look into how filepicking
        and datepicking components look and operate. For now, there are text placeholders.
      */}
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
        {/* TODO format*/}
          <Link href="/">
            <button type="submit" className="submitBtn">Submit</button>
          </Link>
        </userForm>
    </div>
  )
}