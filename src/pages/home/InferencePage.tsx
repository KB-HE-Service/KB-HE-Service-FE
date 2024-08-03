import HomeContainer from "./HomeContainer";

import { Element } from "@/entities";

const InferencePage = () => {
  return (
    <HomeContainer>
      <Element
        title="보험 추천 AI 서비스"
        subTitle="사용자 개인정보를 바탕으로 가장 적합한 보험을 추천합니다."
      />
    </HomeContainer>
  );
};

export default InferencePage;
