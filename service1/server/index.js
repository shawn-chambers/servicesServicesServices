const express = require('express');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 3223;
const productsRouter = require('./routes/productRoutes.js');

const app = express();
app.use(cors({
  origin: 'http://localhost:8080'
}))
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
};
app.use(express.json());

app.use(express.static('public'));
app.use('/:id', express.static('public'));

app.use('/products', productsRouter);

app.listen(port, () => console.log(`listening on port ${port}`));

module.exports = app;