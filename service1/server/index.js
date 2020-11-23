const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const port = process.env.PORT || 3223;
const productsRouter = require('./routes/productRoutes.js');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
};
app.use(express.static('public'));
app.use(express.json());

app.use('/products', productsRouter);

app.listen(port, () => console.log(`listening on port ${port}`));

module.exports = app;