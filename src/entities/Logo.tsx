import styled from "@emotion/styled";

const Bottom = styled.img`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0%);

  z-index: -1;

  width: 110px;
`;

const Top = styled.img`
  position: fixed;
  top: 4px;
  left: 50%;
  transform: translate(-50%, 0%);

  z-index: -1;

  width: 110px;
`;

export const BottomLogo = () => (
  <Bottom src="/img/logo2.png" alt="logo"></Bottom>
);

export const TopLogo = () => <Top src="/img/logo2.png" alt="logo"></Top>;
