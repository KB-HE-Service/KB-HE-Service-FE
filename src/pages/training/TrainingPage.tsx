import { useParams, useNavigate } from "react-router";
import { useEffect } from "react";

import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

import {
  MidContainer,
  Title,
  SubTitle,
  LargeTitle,
  Explanation,
  MidPointLine,
  Button,
} from "@/entities";
import { HomeContainer } from "@/widget";
import { useDataStore, useModelsStore } from "@/shared";
import { createSnowflake } from "@/utils";

const TrainingPage = () => {
  const { id } = useParams();
  const navigation = useNavigate();

  const trainingModels = useModelsStore((state) => state.trainingModels);

  const resetOriginDatas = useDataStore((state) => state.resetOriginDatas);
  const setClientId = useDataStore((state) => state.setClientId);
  const setModelId = useDataStore((state) => state.setModelId);

  const snowflacke = createSnowflake();

  useEffect(() => {
    if (id) {
      setClientId(snowflacke());
      setModelId(id);
      resetOriginDatas(trainingModels.find((model) => model.id === id)!);
    }
  }, []);

  return (
    <>
      <HomeContainer>
        <MidContainer>
          <LargeTitle>KB 보험 추천 AI</LargeTitle>
          <MidPointLine />
          <SubTitle>사용자에 가장 적합한 보험을 추천하는 AI입니다.</SubTitle>
          <SubTitle>하단 버튼을 누르면 AI 개발에 기여할 수 있습니다.</SubTitle>
          <div style={{ height: "25px" }}></div>

          <Title>학습 진행도</Title>
          <div style={{ height: "10px" }}></div>
          <SubTitle>여러분의 도움으로 이만큼 똑똑해지고 있어요!</SubTitle>
          <div style={{ height: "6px" }}></div>
          <ProgressBar
            percent={30}
            width={348}
            height={30}
            filledBackground="linear-gradient(to right, #f0a00088, #f0a000)"
          ></ProgressBar>

          <div style={{ height: "40px" }}></div>
          <img
            src="/img/character.png"
            style={{ width: "120px", marginBottom: "10px" }}
          />
          <Explanation>모든 학습 과정은 암호화를 통해서 이뤄지며,</Explanation>
          <Explanation>본 기기를 제외한 어떤 기기와 서버에서도</Explanation>
          <Explanation>
            입력하신 소중한 개인정보를 확인할 수 없습니다.
          </Explanation>
          <Button
            onClick={() => {
              navigation(`/additionalprivacy/${id}`);
            }}
          >
            AI 개발에 기여하기!
          </Button>
        </MidContainer>
      </HomeContainer>
    </>
  );
};

export default TrainingPage;
