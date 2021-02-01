import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  .money {
    grid-area: image;
    position: relative;
    max-height: 500px;
  }
  
  .all-the-nails {
    grid-area: thumbs;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
  }
  
  .image-slide {
    display: flex;
    justify-content: center;
  }
  
  .carousel {
    display: grid;
    grid-template-columns: 60px 500px;
    grid-template-areas:
    "thumbs image";
  }

  .navigation {
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 500px;
    top: 225px;
  }

  main-picture {
    display: flex;
    justify-content: center;
  }

  .navigation button {
    height: 50px;
    width: 50px;
    border: none;
    outline: none;
    background-color: transparent;
    fill: black;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: fill 0.6 ease;
    transition: width 0.2s ease-in;
  }
  
  .right {
    transform: rotate(90deg);
  }
  
  .left {
    transform: rotate(270deg);
  }
  
  .navigation button:hover {
    width: 55px;
    transition: width 0.6s ease;
    fill: magenta;
    transition: fill 0.6s ease;
  }

  .thumbnail {
    opacity: 25%;
    background: white;
    border: none;
    outline: none;
    display: flex;
    max-height: 60px;
    max-width: 60px;
  }

  .carousel__slider--horizontal {
    justify-content: center;
  }

  .carousel__dot--selected {
    opacity: 100%;
  }
  
  img {
    max-height: 100%;
    max-width: 100%;
  }

`;