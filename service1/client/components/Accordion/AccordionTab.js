import React, { useState, useRef } from 'react';
import Chevron from './Chevron';

const tabParser = (props) => {
  return props.title.split(' ')[0].toLowerCase();
}

// const [setHeight, height] = useState('0px');
const setHeight = ({state}) => {
  if (state === 'collapsed') {
    return {
      maxHeight: '0px'
    }
  } else {
    return {
      maxHeight: '60px'
    }
  }
}

const Tab = (props) => (
  <div className="accordion_tab">
    <button className={`accordion ${props.state}`} onClick={() => props.toggle([tabParser(props), props.state])}>
    <p className={'accordion_title'}>{props.title}</p>
    <Chevron width={15} class={`accordion_icon ${props.state === 'active' ? 'rotate' : ''}`}/>
    </button>
    <div className="accordion_content" style={setHeight(props)}>
      <div className="accordion_text">
        {props.description ? props.description : null}
        {props.features ? props.features.map((feature, i) => (
            <li key={i}>{feature}</li>
        )) : null}
        {props.title === 'Shipping and Returns' ? 'Free shipping on orders over $50, and our no questions asked return policy for shoes through January 15. If it\'s broken it\'s your problem.' : null}
        {props.title === 'Care Guide' ? 'Scrub with steel wool until desired polish is reached. If cloudiness appears, rinse with saline solution or your own tears.' : null}
      </div>
    </div>
  </div>
)


export default Tab;