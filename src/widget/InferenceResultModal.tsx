import styled from "@emotion/styled";
import { Background, MidContainer } from "@/entities";

export const InferenceResultModal = ({
  onClose,
  result,
}: {
  onClose: () => void;
  result: string;
}) => {
  return (
    <>
      <Background color="#0000008f" onClick={onClose} zIndex />
      <Container>{result}</Container>
    </>
  );
};

const Container = styled(MidContainer)`
  width: 80%;
  height: 400px;
  background-color: white;

  border-radius: 10px;

  z-index: 11;
`;
