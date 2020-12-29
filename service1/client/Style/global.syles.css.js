import { createGlobalStyle } from 'styled-components';
import Medium from '../assets/Montserrat-Medium.ttf';
import Thin from '../assets/Montserrat-Thin.ttf';

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Medium';
    src: local('Monteserrat'), url(${Medium}) format('truetype');
  }

  @font-face {
    font-family: 'Thin';
    src: local('Monteserrat'), url(${Thin}) format('truetype');
  }

  body {
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-size: 14px;
  }

  .medium {
    font-family: 'Medium';
  }
  
  .thin {
    font-family: 'Thin';
  }

  button {
    font-weight: 600;
    font-size: 14px;
  }

`;