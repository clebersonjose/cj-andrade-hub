import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, 
  *:after,
  *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    color: #000;
  }
  body{
    font-size: 100%;
    list-style-type: none;
    font-family: 'Quicksand', sans-serif;
    font-size: 10px;
  }

  @media(max-width: 360px) {
    body {
      font-size: 8px;
    }
  }
`;

export default GlobalStyle;
