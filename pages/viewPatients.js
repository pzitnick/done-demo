import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Patient = () => {
/*
  TODO: create the patient component as shown in the paper prototype
  Also add hooks for all the fields so I can eventually populate these
  from the database.
*/
}

export default function ViewPatientsPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Done Demo View Patients</title>
      </Head>

      {/* TODO format*/}
      <p className={styles.description}>
        View Patients
      </p>

      {/*
        TODO: Create scrollview and populate with Patient components as
        they're created. I want to use SWR to help me with this, which does
        quick refreshes from the user's cache to refresh data on the page. This
        seems like the best strategy for an updating list of appointments and patients
        https://swr.vercel.app/
      */}
      <div>
        <Patient />
      </div>
    </div>
  )
}