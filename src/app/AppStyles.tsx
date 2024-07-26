import { Global, css } from "@emotion/react";

const Styles = css`
  * {
    font-family: "Gowun Dodum", sans-serif;
  }
`;

const AppStyles = () => <Global styles={Styles}></Global>;

export default AppStyles;
