import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "pretendard", sans-serif !important;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
  }
`;

export default GlobalStyle;
