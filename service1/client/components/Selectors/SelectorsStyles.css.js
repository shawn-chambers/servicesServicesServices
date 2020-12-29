import styled from 'styled-components';

export const SelectorsContainer = styled.div`
  .size-button-container,
  .color-button-container {
    display: flex;
    justify-content: space-evenly;
  }

  button {
    background-color: #eee;
    height: 60px;
    width: 60px;
    color: #444;
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
  }

  .color {
    border-radius: 50%;
  }

  .color:hover {
    border: 3px solid #ccc;
  }

  .color.selected {
    border: 3px solid black;
  }
  
  .purchase-button {
    width: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
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
`;