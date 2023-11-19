import styled from "styled-components";
import { useRecoilValue } from "recoil";
import debounceLogState from "./../atom";

function LogContainer() {
  const logMessages = useRecoilValue(debounceLogState); // 읽기 전용!
  return (
    <div>
      <h3>로그</h3>
      <LogMessages>
        {logMessages.map((message, index) => (
          <div key={`log${index}`}>{message}</div>
        ))}
      </LogMessages>
    </div>
  );
}

export default LogContainer;

const LogMessages = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 200px;
  padding-left: 15px;
  border-radius: 10px;
  background-color: gray;
  overflow-y: auto;
`;
