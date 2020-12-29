import styled from 'styled-components';

export const SelectorsContainer = styled.div`


  .size-button-container,
  .color-button-container {
    display: flex;
    justify-content: space-evenly;
  }



  button {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 8px;
    display: flex;
    justify-content: space-between;
    border: none;
    outline: none;
    transition: background-color 0.6s ease;
  }

  button:hover {
    background-color: #ccc;
  }
  
  .selector {
    padding: 13px 18px;
  }

  .purchase {
    display: flex;
    justify-content: center;
  }
  
  .purchase-button {
    width: 100%;
    height: 100%;
    color: white;
    margin: auto;
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