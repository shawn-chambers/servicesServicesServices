import { createGlobalStyle } from 'styled-components';
import Medium from './assets/fonts/Montserrat-Regular.ttf';
import Thin from './assets/fonts/Montserrat-Light.ttf';
import Bold from './assets/fonts/Montserrat-Bold.ttf';

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
    font-family: 'Medium';
  }

`;