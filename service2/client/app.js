import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Carousel from './components/Carousel';
import { GlobalStyle } from './global.styles.css'

const App = () => {

  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    let prodId = window.location.pathname.slice(1, -1);
    axios.get(`http://localhost:8080/api/pictures/${prodId}`)
      .then(({ data }) => data.message.urls)
      .then(pictures => setPictures(pictures))
      .catch(err => console.log('error getting pictures:', err))
  }, [])

  return (
    <>
      <GlobalStyle />
      <Carousel pictures={pictures} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('picture-service'));