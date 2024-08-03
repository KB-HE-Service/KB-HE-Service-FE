import styled from "@emotion/styled";

import { ElementSubTitle, ElementTitle, Container } from "@/entities";

export const Element = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <ElementContainer>
      <ElementStyledLine />
      <ElementTitle>{title}</ElementTitle>
      <ElementSubTitle>{subTitle}</ElementSubTitle>
    </ElementContainer>
  );
};

const ElementContainer = styled(Container)`
  position: relative;

  width: 90%;
  height: 70px;

  color: white;
  background-color: #fcaf16;

  align-items: flex-start;

  border-radius: 5px;

  padding-left: 20px;
  margin-top: 10px;
`;

const ElementStyledLine = styled.div`
  position: absolute;

  top: 10%;
  left: 8px;

  height: 80%;
  width: 4px;
  background-color: white;

  border-radius: 2px;
`;
