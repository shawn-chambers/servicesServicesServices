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
    axios.get(`http://localhost:3003/products/${prodId}`)
      .then(({ data }) => {
        console.log(data);
        setInfo(data.data.product);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <>
      <GlobalStyle />
      <Title prodInfo={exampleData.data.product}/>
      <OptionSelectors prodInfo={exampleData.data.product} />
      <Info prodInfo={exampleData.data.product} />
    </>
  )
}

ReactDom.render(<App />, document.getElementById('app'));