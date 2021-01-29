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
    align-items: center;
    bottom: 10px;
    width: 500px;
  }

  main-picture {
    display: flex;
    justify-content: center;
  }

  .navigation button {
    border: none;
    outline: none;
    background-color: transparent;
  }

  .right {
    transform: rotate(90deg);
  }

  .left {
    transform: rotate(270deg);
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