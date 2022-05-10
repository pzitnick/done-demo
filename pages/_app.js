//import '../styles/globals.css'
import Head from 'next/head'
import Link from 'next/link'
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
        <Link href="/login"><Button className="loginBtn">Login</Button></Link>
        <Link href="/register"><Button className="registerBtn">Register</Button></Link>

        <Component {...pageProps} />
      </div>
    </>
  )
}

/*
  This section is css styling for the header bar that appears on each page.
  I used BuilderX to generate some styles so I could learn how those looked
  enough to make some small changes. I would eventually want to layout each
  screen component so I would have styles for my reusable components that match
  up with the paper prototype. (Including icons, flexing buttons, etc)
*/
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
  background-color: #3FBDDC;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

export default MyApp
