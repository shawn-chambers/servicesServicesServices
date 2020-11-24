const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DATABASE, 
  process.env.USERNAME,
  null,
  {
    host: process.env.HOST,
    dialect: 'postgres',
    logging: false
  }
);

sequelize.authenticate()
  .then(() => {
    console.log('connected to postgresdb');
  })
  .catch(() => {
    console.error('unable to connect to postgresdb');
  });


const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  salePrice: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  features: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
    defaultValue: []
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

if (process.env.NODE_ENV === 'development') {
  (async() => {
    await Product.sync();
  })();
}

module.exports = {
  db: sequelize,
  Product
};
