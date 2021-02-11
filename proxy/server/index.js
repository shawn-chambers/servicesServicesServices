const express = require('express');
const proxy = require('express-http-proxy');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const port = 8080;


app.use(morgan('dev'));
app.use(express.static('public'));
app.use('/:id', express.static('public'));


app.use('/products', cors());
app.use('/products', proxy('http://localhost:3003/products', {
  proxyReqPathResolver: (req) => {
    let id = req.url.split('?');
    return `/products/${id}`;
  }
}));

app.use('/api/pictures', cors());
app.use('/api/pictures/', proxy('http://localhost:3000/api/pictures/', {
  proxyReqPathResolver: (req) => {
    let id = req.url.split('?');
    return `/api/pictures/${id}`;
  }
}));

app.use('/api/reviews', cors());
app.use('/api/reviews/', proxy('http://localhost:3005/api/reviews/', {
  proxyReqPathResolver: (req) => {
    let id = req.url.split('?');
    return `/api/reviews${id}`;
  }
}));

app.listen(port, () => console.log(`proxy listening on port ${port}`));