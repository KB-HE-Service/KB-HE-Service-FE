import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MidContainer = styled(Container)`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const InputContainer = styled(Container)`
  margin-top: 30px;
  width: 70%;
  align-items: flex-start;
`;
