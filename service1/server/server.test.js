const express = require(express);
const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.TESTDB, 
  process.env.USERNAME,
  null,
  {
    host: process.env.HOST,
    dialect: 'postgres'
  }
);

sequelize.authenticate()