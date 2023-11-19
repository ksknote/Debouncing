import "./App.css";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import CodeBlock from "./components/CodeBlockContainer";
import styled from "styled-components";
import DebouncingContainer from "./components/DebouncingContainer";

function App() {
  return (
    <RecoilRoot>
      <Wrapper>
        <Header>
          <h1>디바운싱</h1>
          <p>by Seongkyoung Kwon</p>
        </Header>
        <Body>
          <CodeBlock />
          <DebouncingContainer />
        </Body>
      </Wrapper>
    </RecoilRoot>
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

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  > div {
    flex: 1;
    padding: 10px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
