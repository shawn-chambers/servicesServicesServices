const express = require('express');
const path = require('path');
const proxy = require('express-http-proxy');
const app = express();
const axios = require('axios');
const morgan = require('morgan');
const port = 8080;


app.use(morgan('dev'));
app.use(express.static('public'));
app.use('/:id', express.static('public'));

app.get('/imageBundle.js', async (req, res) => {
  const id = req.params.prodId;
  const bundle = await axios.get(`http://localhost:3000/:${id}`);
  console.log('here');
  console.log(bundle);
  res.send(bundle);
})

app.use('/api/pictures/', proxy('http://localhost:3000/api/pictures/', {
  proxyReqPathResolver: (req) => {
    let id = req.url.split('?');
    console.log('id in proxy', id);
    return `/api/pictures/${id}`;
  }
}));



// app.get('/api/pictures/:prodId', async (req, res) => {
//   const id = req.params.prodId;
//   try {
//     const data = await axios.get(`http://localhost:3000/api/pictures/:${id}`)
//     res.send(data);
//   } catch (error) {
//     console.log(error);
//   }
// })

app.listen(port, () => console.log(`proxy listening on port ${port}`));