import { useNavigate, useParams } from "react-router";

import {
  MidContainer,
  SubTitle,
  LargeTitle,
  Explanation,
  MidPointLine,
  Button,
} from "@/entities";
import { HomeContainer } from "@/widget";

const InferencePage = () => {
  const { id } = useParams();
  const navigation = useNavigate();

  return (
    <>
      <HomeContainer>
        <MidContainer>
          <div style={{ height: "20px" }}></div>
          <LargeTitle>KB 보험 추천 AI</LargeTitle>
          <MidPointLine />
          <SubTitle>사용자에 가장 적합한 보험을 추천하는 AI입니다.</SubTitle>
          <SubTitle>하단 버튼을 누르면 입력하신 정보를 기반으로</SubTitle>
          <SubTitle>초개인화 된 AI 추천 결과를 확인할 수 있습니다.</SubTitle>
          <div style={{ height: "60px" }}></div>
          <img
            src="/img/character.png"
            style={{ width: "120px", marginBottom: "10px" }}
          />
          <Explanation>
            모든 서비스 과정은 암호화를 통해서 이뤄지며,
          </Explanation>
          <Explanation>본 기기를 제외한 어떤 기기와 서버에서도</Explanation>
          <Explanation>
            입력하신 소중한 개인정보를 확인할 수 없습니다.
          </Explanation>
          <Button
            onClick={() => {
              navigation(`/additionalprivacy/${id}`);
            }}
          >
            AI 결과 확인하러 가기!
          </Button>
        </MidContainer>
      </HomeContainer>
    </>
  );
};

export default InferencePage;
