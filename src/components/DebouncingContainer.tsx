import { useState } from "react";
import styled from "styled-components";
import GreenButton from "../assets/green_button.png";
import RedButton from "../assets/red_button.png";
import LigthBurbOn from "../assets/lightburb_on.png";
import LightBurbOff from "../assets/lightburb_off.png";
import useDebounce from "../utils/useDebounce";
import { useSetRecoilState } from "recoil";
import debounceLogState from "../atom";

function DebouncingContainer() {
  const [delay, setDelay] = useState(0);
  const [isLightBurbTurnedOn, setIsLightBurbTurnedOn] = useState(false);
  const logHandler = useSetRecoilState(debounceLogState);

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
    logHandler((prev) => [newLog, ...prev]);
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
    <>
      <div>
        <h3>설정</h3>
        <div>
          <DelaySettingButton onClick={handleClickMinusDelayButton}>
            -
          </DelaySettingButton>
          <DelayText>{delay / 1000}</DelayText>
          <DelaySettingButton onClick={handleClickPlusDelayButton}>
            +
          </DelaySettingButton>{" "}
          초 후에 불 켜기
        </div>
      </div>
      <div>
        <h3>실행</h3>
        <ExecutionContainer>
          <ControlButtons>
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
            <CancelButton onClick={handleClickCancelButton}>취소</CancelButton>
          </ControlButtons>
          <Line />
          <LightBurbImg
            src={isLightBurbTurnedOn ? LigthBurbOn : LightBurbOff}
            alt="전구 아이콘"
          />
        </ExecutionContainer>
      </div>
    </>
  );
}

export default DebouncingContainer;
const DelaySettingButton = styled.button`
  cursor: pointer;
`;

const DelayText = styled.span`
  padding: 10px;
`;
const ExecutionContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ControlButtons = styled.div`
  display: flex;
  align-items: center;
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

const Line = styled.div`
  width: 100%;

  margin: 0 10px;

  border: none;
  border-top: 4px dotted white;
`;

const CancelButton = styled.button`
  width: 50px;
  height: 50px;
  margin-left: 10px;
  cursor: pointer;
`;
