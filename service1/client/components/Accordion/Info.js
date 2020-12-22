import React, { useReducer } from 'react';
import Tab from './AccordionTab';
import { InfoContainer } from './AccordionStyles.css';

const accordionReducer = (state, action) => {
  let [tab, status] = action;
  status = status === 'active' ? 'collapsed' : 'active';
  return {
    ...initialState,
    [tab]: status
  }
}

const initialState = {
  features: 'collapsed',
  description: 'collapsed',
  shipping: 'collapsed',
  care: 'collapsed'
}

const Info = ({prodInfo}) => {
  const toggleAccordion = (action) => {
    dispatch(action);
  }

  const [state, dispatch] = useReducer(accordionReducer, initialState);

  return (
    <InfoContainer>
      <div className="accordion-container">
        <Tab title={'Features'} features={prodInfo.features} toggle={toggleAccordion}  state={state.features}/>
        <Tab title={'Description'} description={prodInfo.description} toggle={toggleAccordion} state={state.description}/>
        <Tab title={'Shipping and Returns'} toggle={toggleAccordion} state={state.shipping}/>
        <Tab title={'Care Guide'} toggle={toggleAccordion} state={state.care}/>
      </div>
    </InfoContainer>
  )
}

export default Info;