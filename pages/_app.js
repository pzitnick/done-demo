//import '../styles/globals.css'
import Head from 'next/head'
import Link from 'next/link'
//import styles from '../styles/Home.module.css'
import styled, { css } from "styled-components";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Done Demo Home</title>
      </Head>
      <FixedHeader>
        <AppLabel>Done Demo</AppLabel>

      </FixedHeader>
      <div>
        <Link href="/"><Button className="homeBtn">Home</Button></Link>
        <Link href="/login"><button className="loginBtn">Login</button></Link>
        <Link href="/register"><button className="registerBtn">Register</button></Link>

        <Component {...pageProps} />
      </div>
    </>
  )
}

const Container = styled.div`
  display: flex;
  background-color: rgba(195,195,195,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const FixedHeader = styled.div`
  height: 134px;
  background-color: #E6E6E6;
  flex-direction: column;
  display: flex;
  margin-top: 94px;
`;

const AppLabel = styled.span`
  font-family: Alice;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 69px;
  height: 79px;
  text-align: center;
  margin-top: 25px;
  margin-left: 26px;
`;

const Button = styled.button`
  background-color: blue;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

export default MyApp
