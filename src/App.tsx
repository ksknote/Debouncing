import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <Header>
        <h1>디바운싱</h1>
        <p>by Seongkyoung Kwon</p>
      </Header>
      <Body>
      </Body>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  padding: 30px;
  background-color: black;
  color: white;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin: 5px;
  }
`;

const Body = styled.body`
  display: flex;
  > div {
    flex: 1;
    padding: 10px;
  }
`;
