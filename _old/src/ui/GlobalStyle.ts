import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, 
  *:after,
  *:before,
  *::placeholder {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    color: #000;
  }

  body {
    list-style-type: none;
    font-family: 'Quicksand', sans-serif;
    font-size: 10px;

    @media(max-width: 360px) {
      font-size: 8px;
    }
  }

  *::placeholder {
    font-family: 'Quicksand', sans-serif;
  }
`;

export default GlobalStyle;
