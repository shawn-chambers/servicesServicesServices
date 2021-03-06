import styled from 'styled-components';

export const InfoContainer = styled.div`
  .accordion_tab {
    display: flex;
    flex-direction: column;
  }
  
  /* Style the buttons that are used to open and close the accordion panel */
  .accordion {
    background-color: #eee;
    cursor: pointer;
    padding: 4px 12px 4px 12px;
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    transition: background-color 0.6s ease;
  }
  
  /* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
  .accordion:hover,
  .active {
    background-color: #ccc;
  }
  
  /* Style the accordion content title */
  .accordion_title {
    font-family: Bold;
    font-size: 14px;
    text-align: left;
  }
  
  /* Style the accordion chevron icon */
  .accordion_icon {
    margin-left: auto;
    transform: rotate(90deg);
    transition: transform 0.6s ease;
  }
  
  /* Style to rotate icon when state is active */
  .rotate {
    transform: rotate(180deg);
  }
  
  /* Style the accordion content panel. Note: hidden by default */
  .accordion_content {
    background-color: white;
    overflow: auto;
    transition: max-height 0.6s ease;
  }
  
  /* Style the accordion content text */
  .accordion_text {
    font-family: 'Medium';
    font-weight: 400;
    font-size: 14px;
    padding: 18px;
  }  

`