const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  'shop', 
  'shawnchambers',
  null,
  {
    host: 'localhost',
    dialect: 'postgres'
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


module.exports = {
  db: sequelize,
  Product
};
