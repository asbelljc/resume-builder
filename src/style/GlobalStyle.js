import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    word-wrap: break-word;
  }

  html {
    font-family: 'Jost', serif;
  }

  h1, h2 {
    line-height: 1;
  }
`;

export default GlobalStyle;
