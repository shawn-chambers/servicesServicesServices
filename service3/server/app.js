const express = require('express');
const app = express();
const db = require('../db/index');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));

module.exports = app;