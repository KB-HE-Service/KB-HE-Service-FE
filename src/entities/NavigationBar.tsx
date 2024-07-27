import styled from "@emotion/styled";
import { useLocation, useNavigate } from "react-router";

import { PAGE_URL } from "@/shared";

export const NavigationBar = () => {
  const { pathname } = useLocation();
  const navigation = useNavigate();

  return (
    <Container>
      {pathname !== PAGE_URL.Inference ? (
        <Button
          onClick={() => {
            navigation(PAGE_URL.Inference);
          }}
        >
          <div>AI 에게</div>추천 받기
        </Button>
      ) : (
        <ClickedButton>
          <div>AI 에게</div>추천 받기
        </ClickedButton>
      )}
      {pathname !== PAGE_URL.Training ? (
        <Button
          onClick={() => {
            navigation(PAGE_URL.Training);
          }}
        >
          <div>AI 개발에</div>기여하기
        </Button>
      ) : (
        <ClickedButton>
          <div>AI 개발에</div>기여하기
        </ClickedButton>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  position: fixed;

  left: 0px;
  bottom: 0px;

  height: 11vh;
  width: 100vw;
`;

const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 90%;
  width: 45%;

  font-weight: bolder;
  color: white;
  font-size: 25px;
  border-radius: 0 0 10px 10px;

  margin-left: 10px;
  margin-right: 10px;

  > div {
    margin-top: 6px;
    margin-bottom: -5px;
    font-weight: normal;
    font-size: 18px;
  }
`;

const ClickedButton = styled(Button)`
  background-color: white;
  color: #776c61;
`;
