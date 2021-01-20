import styled from 'styled-components';

export const SelectorsContainer = styled.div`
  .size-button-container,
  .color-button-container {
    display: flex;
    justify-content: space-evenly;
  }

  button {
    background-color: #eee;
    height: 54px;
    width: 54px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    border: none;
    outline: none;
    transition: background-color 0.6s ease, border 0.6s linear;
  }

  button:hover {
    background-color: #ccc;
  }
  
  .selector {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Medium';
  }

  .sold-out {
    color: red;
    margin-left: 8px;
  }

  .label {
    margin-bottom: 5px;
    font-size: 12px;
  }

  .color {
    border-radius: 50%;
  }

  .color.selected {
    border: 3px solid black !important;
  }
  
  .purchase-button {
    width: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .purchase-button:hover {
    background-color: #eee;
  }

  .active {
    background: black;
  }

  .selected:hover,
  .active:hover,
  .selected {
    background-color: black;
    color: white;
  }

  .selector.out-of-stock {
    color: white
  }
  .selector.out-of-stock:hover {
    background-color: #eee;
  }
`;