import styled from "@emotion/styled";

import { DotLoader } from "react-spinners";

export const Loading = () => {
  return (
    <LoadingWrapper>
      <img src="/img/character3.png"></img>
      <div style={{ height: "10px" }}></div>
      <span>사용자의 소중한 개인 정보를</span>
      <span>안전하게 암호화하고 있습니다...</span>
      <div style={{ height: "30px" }}></div>
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
