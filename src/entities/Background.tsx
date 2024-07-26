import styled from "@emotion/styled";

export const Background = ({
  src,
  color,
}: {
  src?: string;
  color?: string;
}) => {
  const StyledBackground = styled.div`
    ${src ? `background-image: url(${src});` : ""}
    ${color ? `background-color: ${color};` : ""}

    position: fixed;
    top: 0px;
    left: 0px;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;

    z-index: -1;
  `;

  return <StyledBackground />;
};
