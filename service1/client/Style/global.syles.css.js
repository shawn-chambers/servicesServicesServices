import { createGlobalStyle } from 'styled-components';
import Medium from '../assets/Montserrat-Regular.ttf';
import Thin from '../assets/Montserrat-Light.ttf';
import Bold from '../assets/Montserrat-Bold.ttf';

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Medium';
    src: local('Monteserrat'), url(${Medium}) format('truetype');
  }

  @font-face {
    font-family: 'Thin';
    src: local('Monteserrat'), url(${Thin}) format('truetype');
  }

  @font-face {
    font-family: 'Bold';
    src: local('Monteserrat'), url(${Bold}) format('truetype');
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
  
  .bold {
    font-family: 'Bold';
  }

  button {
    font-weight: 600;
    font-size: 14px;
  }

`;