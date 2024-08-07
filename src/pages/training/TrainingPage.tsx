import { useParams } from "react-router";

import {
  MidContainer,
  SubTitle,
  Title,
  Explanation,
  MidPointLine,
  Button,
} from "@/entities";
import { HomeContainer } from "@/widget";

const TrainingPage = () => {
  const { id } = useParams();

  return (
    <>
      <HomeContainer>
        <MidContainer>
          <div style={{ height: "100px" }}></div>
          <Title>KB 보험 추천 AI</Title>
          <MidPointLine />
          <SubTitle>사용자에 가장 적합한 보험을 추천하는 AI입니다.</SubTitle>
          <SubTitle>하단 버튼을 누르면 AI 개발에 기여할 수 있습니다.</SubTitle>
          <div style={{ height: "60px" }}></div>
          <img
            src="/img/character.png"
            style={{ width: "120px", marginBottom: "10px" }}
          />
          <Explanation>모든 학습 과정은 암호화를 통해서 이뤄지며,</Explanation>
          <Explanation>본 기기를 제외한 어떤 기기와 서버에서도</Explanation>
          <Explanation>
            입력하신 소중한 개인정보를 확인할 수 없습니다.
          </Explanation>
          <Button onClick={() => {}}>AI 개발에 기여하기!</Button>
        </MidContainer>
      </HomeContainer>
    </>
  );
};

export default TrainingPage;
