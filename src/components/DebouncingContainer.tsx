import { useState, useEffect } from "react";
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
  const [delayInputValue, setDelayInputValue] = useState(0);
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

  const handleClickSetDelay = () => {
    setDelay(delayInputValue);
    setDelayInputValue(0);
    setLogMessage(`delay가 ${delayInputValue}로 설정되었습니다.`);
  };

  const handleClickGreenButton = () => {
    turnObBurbAfterDelay.debounced().then((res) => setLogMessage(`반짝`));
  };

  const handleClickRedButton = () => {
    turnObBurbImmediately.debounced().then((res) => setLogMessage(`반짝`));
  };

  const handleClickResetButton = () => {
    turnObBurbAfterDelay.cancel();
  };

  const setLogMessage = (newLog: string) => {
    setLogMessages((prev) => [...prev, newLog]);
  };

  return (
    <div>
      <Description />
      <TimerSettingContainer>
        <h3>설정</h3>
        <label htmlFor="timer">delay</label>
        <input
          id="timer"
          type="number"
          value={delayInputValue}
          onChange={(e) => setDelayInputValue(parseInt(e.target.value))}
        />
        <button onClick={handleClickSetDelay}>설정</button>
      </TimerSettingContainer>
      <div>
        <h3>실행</h3>
        <div>
          <p>Delay: {delay}</p>
        </div>
        <LogContainer>
          {logMessages.map((message, index) => (
            <div key={index}>{message}</div>
          ))}
        </LogContainer>
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
        </div>
        <LightBurbImg
          src={isLightBurbTurnedOn ? LigthBurbOn : LightBurbOff}
          alt="전구 아이콘"
        />
        <Button onClick={handleClickResetButton}>리셋</Button>
      </div>
    </div>
  );
}

export default DebouncingContainer;

const TimerSettingContainer = styled.div``;

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

const Button = styled.button``;

const LogContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  background-color: gray;
  overflow-y: auto;
`;
