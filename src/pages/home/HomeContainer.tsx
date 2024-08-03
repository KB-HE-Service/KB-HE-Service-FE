import styled from "@emotion/styled";

import {
  Background,
  WhiteContainer,
  TopLogo,
  NavigationBar,
  Container,
} from "@/entities";

const HomeContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Background color="#FCAF16" />
      <TopLogo />
      <WhiteContainer>
        {children}
        <Continue>
          <img src="/img/character2.png"></img>
          <span>안전한 초개인화 AI 서비스를 위한</span>
          <span>KB HI의 모험은 계속됩니다!</span>
        </Continue>
      </WhiteContainer>
      <NavigationBar />
    </>
  );
};

const Continue = styled(Container)`
  opacity: 0.6;

  margin-top: 50px;
  > img {
    width: 110px;
    margin-bottom: 10px;
  }
`;

export default HomeContainer;
