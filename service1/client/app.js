import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import exampleData from './example.js';

import { GlobalStyle } from './Style/global.syles.css';
import Info from './components/Accordion/Info';
import Title from './components/Title/Title';
import OptionSelectors from './components/Selectors/Selectors';

const App = () => {

  const [info, setInfo] = useState({});

  useEffect(() => {
    let prodId = window.location.pathname.slice(1, -1);
    axios.get(`http://localhost:8080/products/${prodId}`)
      .then(({ data }) => {
        setInfo(data.data.product);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <>
      <GlobalStyle />
      <Title prodInfo={info}/>
      <OptionSelectors prodInfo={info} />
      <Info prodInfo={info} />
    </>
  )
}

ReactDom.render(<App />, document.getElementById('app'));