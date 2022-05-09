import React, { Component } from "react";
import styled, { css } from "styled-components";
//import MaterialButtonSuccess from "../components/MaterialButtonSuccess";

function Welcome(props) {
  return (
    <Container>
      <Rect>
        <WelcomeMessageLabel>Welcome!</WelcomeMessageLabel>
      </Rect>
      <PromptLabel>What would you like to do?</PromptLabel>
     // <MaterialButtonSuccess
     //   style={{
     //     height: 124,
      //    width: 293,
     //     backgroundColor: "rgba(74,144,226,1)",
     //     marginTop: 37,
    //      marginLeft: 33
    //    }}
    //  ></MaterialButtonSuccess>
    //  <MaterialButtonSuccess
    //    style={{
    //      height: 124,
    //      width: 293,
    //      backgroundColor: "rgba(74,144,226,1)",
    //      marginTop: 20,
    //      marginLeft: 33
    //    }}
    //  ></MaterialButtonSuccess>
    <Button> Do Something </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(195,195,195,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

const Rect = styled.div`
  height: 134px;
  background-color: #E6E6E6;
  flex-direction: column;
  display: flex;
  margin-top: 94px;
`;

const WelcomeMessageLabel = styled.span`
  font-family: Alice;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 69px;
  height: 79px;
  width: 308px;
  text-align: center;
  margin-top: 25px;
  margin-left: 26px;
`;

const PromptLabel = styled.span`
  font-family: Trebuchet MS;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 25px;
  text-align: center;
  width: 323px;
  height: 38px;
  margin-top: 40px;
  margin-left: 18px;
`;

export default Welcome;