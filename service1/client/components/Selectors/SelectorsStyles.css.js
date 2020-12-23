import styled from 'styled-components';

export const SelectorsContainer = styled.div`
  .button-container {
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
    border: 1px solid black;
    outline: none;
    transition: background-color 0.6s ease;
  }

  button:hover,
  .active {
    background-color: #ccc;
  }
`;