const express = require('express');
const morgan = require('morgan');
const port = process.env.PORT || 3223;

const productsRouter = require('./productRoutes.js');

const app = express();

app.use(express.static('public'));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/products', productsRouter);

app.listen(port, () => console.log(`listening on port ${port}`));

module.exports = app;