import { createGlobalStyle } from "styled-components";
// Using globalstyle to apply styling that needs to be on ALL specified elements for consistent styling
export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    margin: auto;
    background: linear-gradient(
      180deg,
      rgba(235, 246, 235, 1) 0%,
      rgba(255, 255, 255, 1)20%)
  }

  main {
    min-height: 100vh;
    max-width: 1200px;
    margin: auto;
  }

  h1, h2, h3, h4, p, a, button {
    font-family: 'Open Sans', sans-serif; 
  }
`;
