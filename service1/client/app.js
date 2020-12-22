import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import exampleData from './example.js';

import Info from './components/Accordion/Info';

const App = () => {

  const [info, setInfo] = useState({});

  useEffect(() => {
    let prodId = window.location.pathname.slice(1, -1);
    axios.get(`http://localhost:3003/products/${prodId}`)
      .then(({data}) => {
        setInfo(data.data.product);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <>
      <Info prodInfo={exampleData.data.product}/>
    </>
  )
}

ReactDom.render(<App/>, document.getElementById('app'));