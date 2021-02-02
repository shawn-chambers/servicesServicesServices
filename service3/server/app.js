const express = require('express');
const app = express();
const db = require('../db/index');
const morgan = require('morgan');
const router = require('./router');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));
app.use('/:prodId', express.static('public'));

app.use('/api/reviews', router);

module.exports = app;