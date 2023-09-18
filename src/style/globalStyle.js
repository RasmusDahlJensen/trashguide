import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    margin: auto;
    background: linear-gradient(
      180deg,
      rgba(235, 246, 235, 1) 0%,
      rgba(255, 255, 255, 1) 10%)
  }

  main {
    min-height: 60vh;
    max-width: 1200px;
  }

  h1, h2, h3, h4, p, a {
    font-family: 'Open Sans', sans-serif; 
  }
`;
