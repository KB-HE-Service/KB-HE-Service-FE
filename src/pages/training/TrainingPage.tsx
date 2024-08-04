import { useParams } from "react-router";

import { Loading, MidContainer, SubTitle, Title } from "@/entities";
import { HomeContainer } from "@/widget";

const TrainingPage = () => {
  const { id } = useParams();
  return (
    <>
      <HomeContainer>
        <Title></Title>
        <SubTitle>철저한 암호화를 통한</SubTitle>
        <SubTitle>초개인화 AI 추천 서비스</SubTitle>
        <img src="/img/logo.png" width="140px" />
        <div style={{ height: "50px" }}></div>
      </HomeContainer>
    </>
  );
};

export default TrainingPage;
