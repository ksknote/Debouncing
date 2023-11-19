import { useState } from "react";
import styled from "styled-components";
import GreenButton from "../assets/green_button.png";
import RedButton from "../assets/red_button.png";
import LigthBurbOn from "../assets/lightburb_on.png";
import LightBurbOff from "../assets/lightburb_off.png";
import debounce from "../utils/debounce";

function DebouncingContainer() {
  const [delayInputValue, setDelayInputValue] = useState(0);
  const [delay, setDelay] = useState(0);
  const [isLightBurbTurnedOn, setIsLightBurbTurnedOn] = useState(false);

  const turnOnBulb = () => {
    setIsLightBurbTurnedOn(true);
    setTimeout(() => {
      setIsLightBurbTurnedOn(false);
    }, 1000);
  };

  const handleClickSetDelay = () => {
    setDelay(delayInputValue);
    setDelayInputValue(0);
    alert(`delay가 ${delay}로 설정되었습니다.`);
  };

  const handleClickGreenButton = () => {
    debounce(turnOnBulb, delay, false)
      .debounced()
      .then((res) => console.log(res));
  };

  const handleClickRedButton = () => {
    debounce(turnOnBulb, delay, true)
      .debounced()
      .then((res) => console.log(res));
  };

  return (
    <div>
      <div>
        <h3>동작 설명</h3>
        <div>
          <ButtonDescriptionContainer>
            <img src={GreenButton} alt="초록색 버튼" />
            <p>
              초록 스위치를 클릭하면 설정한 시간이 지난 후 불이 켜집니다. 만약
              설정한 시간이 지나기 전에 초록 스위치를 다시 클릭하면 다시 클릭한
              시간을 기준으로 설정한 시간이 지난 후 불이 켜집니다.
            </p>
          </ButtonDescriptionContainer>
          <ButtonDescriptionContainer>
            <img src={RedButton} alt="빨간색 버튼" />
            <p>빨간 스위치를 클릭하면 바로 불이 들어옵니다.</p>
          </ButtonDescriptionContainer>
        </div>
      </div>
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
        <Button>리셋</Button>
      </div>
    </div>
  );
}

export default DebouncingContainer;

const ButtonDescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  img {
    width: 40px;
    height: 40px;
  }
`;

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
