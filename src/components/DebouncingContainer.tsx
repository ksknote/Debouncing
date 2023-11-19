import { useState } from "react";
import styled from "styled-components";
import GreenButton from "../assets/green_button.png";
import RedButton from "../assets/red_button.png";
import LigthBurbOn from "../assets/lightburb_on.png";
import LightBurbOff from "../assets/lightburb_off.png";
import useDebounce from "../utils/useDebounce";
import Description from "./Description";
import { useRecoilState } from "recoil";
import debounceLogState from "./../atom";

function DebouncingContainer() {
  const [delay, setDelay] = useState(0);
  const [isLightBurbTurnedOn, setIsLightBurbTurnedOn] = useState(false);
  const [logMessages, setLogMessages] = useRecoilState(debounceLogState);

  const turnOnBulb = () => {
    setIsLightBurbTurnedOn(true);
    setTimeout(() => {
      setIsLightBurbTurnedOn(false);
    }, 1000);
  };

  const turnObBurbAfterDelay = useDebounce(turnOnBulb, delay, false);
  const turnObBurbImmediately = useDebounce(turnOnBulb, delay, true);

  const handleClickGreenButton = () => {
    turnObBurbAfterDelay
      .debounced()
      .then((res) => setLogMessage(`반짝`))
      .catch((error) => setLogMessage(error));
  };

  const handleClickRedButton = () => {
    turnObBurbImmediately
      .debounced()
      .then((res) => setLogMessage(`반짝`))
      .catch((error) => setLogMessage(error));
  };

  const handleClickCancelButton = () => {
    turnObBurbAfterDelay.cancel();
  };

  const setLogMessage = (newLog: string) => {
    setLogMessages((prev) => [newLog, ...prev]);
  };

  const handleClickPlusDelayButton = () => {
    setDelay((prev) => prev + 1000);
  };
  const handleClickMinusDelayButton = () => {
    if (delay >= 1000) {
      setDelay((prev) => prev - 1000);
    }
  };

  return (
    <div>
      <Description />
      <div>
        <h3>설정</h3>
        <div>
          <button onClick={handleClickMinusDelayButton}>-</button>
          <DelayText>{delay / 1000}</DelayText>
          <button onClick={handleClickPlusDelayButton}>+</button> 초 후에 불
          켜기
        </div>
      </div>
      <div>
        <h3>실행</h3>
        <div>
          <PushButton
            src={GreenButton}
            alt="초록색 버튼"
            onClick={handleClickGreenButton}
          />
          <PushButton
            src={RedButton}
            alt="빨간색 버튼"
            onClick={handleClickRedButton}
          />
          <LightBurbImg
            src={isLightBurbTurnedOn ? LigthBurbOn : LightBurbOff}
            alt="전구 아이콘"
          />
          <CancelButton onClick={handleClickCancelButton}>
            타이머 취소
          </CancelButton>
        </div>
      </div>
      <div>
        <h3>로그</h3>
        <LogMessages>
          {logMessages.map((message, index) => (
            <div key={`log${index}`}>{message}</div>
          ))}
        </LogMessages>
      </div>
    </div>
  );
}

export default DebouncingContainer;

const DelayText = styled.span`
  padding: 10px;
`;

const PushButton = styled.img`
  width: 90px;
  height: 90px;
  -webkit-transition: transform 0.1s ease-in-out;
  transition: transform 0.1s ease-in-out;
  cursor: pointer;

  &:active {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }
`;

const LightBurbImg = styled.img`
  width: 80px;
`;

const CancelButton = styled.button`
  /* width: 50px; */
`;

const LogMessages = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 200px;
  padding-left: 15px;
  border-radius: 10px;
  background-color: gray;
  overflow-y: auto;
`;
