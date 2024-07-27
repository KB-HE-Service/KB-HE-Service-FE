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
  background-color: white;

  margin-top: 30px;

  width: 90%;
  height: 300px;

  border-radius: 5px;

  align-items: flex-start;
`;
