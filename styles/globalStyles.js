import {
    createGlobalStyle
} from 'styled-components';

const GlobalStyles = createGlobalStyle `
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #121212;
    color: #fff;
    font-family: 'Arial', sans-serif;
  }

  h2, h3 {
    color: #fff;
  }

  button {
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export default GlobalStyles;