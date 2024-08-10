import styled from "@emotion/styled";
import { Background, MidContainer, Title } from "@/entities";

export const InferenceResultModal = ({
  onClose,
  name,
  result,
}: {
  onClose: () => void;
  name: string;
  result: string;
}) => {
  return (
    <>
      <Background color="#0000008f" onClick={onClose} zIndex />
      <Container>
        <Title>{name}</Title>
        <span>{result}</span>
      </Container>
    </>
  );
};

const Container = styled(MidContainer)`
  width: 80%;
  height: 400px;
  background-color: white;

  border-radius: 10px;

  z-index: 11;

  > span {
    width: 80%;
  }
`;
