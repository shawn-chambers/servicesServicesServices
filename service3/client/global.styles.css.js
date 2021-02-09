import { createGlobalStyle } from 'styled-components';
import Medium from './assets/fonts/Montserrat-Regular.ttf';
import Thin from './assets/fonts/Montserrat-Light.ttf';
import Bold from './assets/fonts/Montserrat-Bold.ttf';
import Hind from './assets/fonts/Hind-Regular.ttf';
import HindBold from './assets/fonts/Hind-SemiBold.ttf';

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

  @font-face {
    font-family: 'Hind';
    src: local('Hind'), url(${Hind}) format('truetype');
  }

  @font-face {
    font-family: 'HindBold';
    src: local('Hind'), url(${HindBold}) format('truetype');
  }

  body {
    font-family: 'Medium';
  }

`;