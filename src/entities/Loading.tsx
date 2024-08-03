import styled from "@emotion/styled";

import { DotLoader } from "react-spinners";

export const Loading = () => {
  return (
    <LoadingWrapper>
      <Container>
        <span>
          <div>사용자의 소중한 개인 정보를</div>
          <div>안전하게 암호화하고 있습니다...</div>
        </span>
        <img src="/img/character3.png" width={50} />
      </Container>
      <div style={{ height: "10px" }}></div>
      <DotLoader color="white" size={100} speedMultiplier={0.8} />
    </LoadingWrapper>
  );
};

export const LoadingWrapper = styled.div`
  position: fixed;

  top: 0px;
  left: 0px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  background-color: #0000006a;

  z-index: 10;

  color: white;
`;

const Container = styled.div`
  position: absolute;
  bottom: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;

  > img {
    margin-left: 10px;
  }
`;
