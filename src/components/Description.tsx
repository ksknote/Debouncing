import styled from "styled-components";
import GreenButton from "../assets/green_button.png";
import RedButton from "../assets/red_button.png";

function Description() {
  return (
    <>
      <h3>동작 설명</h3>
      <div>
        <ButtonDescriptionContainer>
          <img src={GreenButton} alt="초록색 버튼" />
          <p>
            <b>debounce 버튼</b>
            <br />
            초록 스위치를 클릭하면 설정한 시간이 지난 후 불이 켜집니다. 만약
            설정한 시간이 지나기 전에 초록 스위치를 다시 클릭하면 다시 클릭한
            시간을 기준으로 설정한 시간이 지난 후 불이 켜집니다.
          </p>
        </ButtonDescriptionContainer>
        <ButtonDescriptionContainer>
          <img src={RedButton} alt="빨간색 버튼" />
          <p>
            <b>immediate 버튼</b>
            <br />
            빨간 스위치를 클릭하면 바로 불이 들어옵니다.
          </p>
        </ButtonDescriptionContainer>
      </div>
    </>
  );
}

export default Description;

const ButtonDescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  img {
    width: 40px;
    height: 40px;
  }
`;
