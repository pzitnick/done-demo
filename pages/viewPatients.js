import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Patient = () => {

}

export default function ViewPatientsPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Done Demo View Patients</title>
      </Head>
      <p className={styles.description}>
        View Patients
      </p>

      <div>
        <Patient />
      </div>
    </div>
  )
}