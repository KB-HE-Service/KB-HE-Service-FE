import styled from "@emotion/styled";

import { DotLoader } from "react-spinners";

export const Loading = () => {
  return (
    <LoadingWrapper>
      <DotLoader color="#FCAF16" size={100} speedMultiplier={0.8} />
    </LoadingWrapper>
  );
};

export const LoadingWrapper = styled.div`
  position: fixed;

  top: 0px;
  left: 0px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  background-color: #0000006a;

  z-index: 10;
`;
