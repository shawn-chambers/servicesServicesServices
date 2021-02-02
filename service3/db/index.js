const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB, process.env.DBUSERNAME, null, {
  host: process.env.DBHOST,
  dialect: 'postgres',
  logging: false
})

sequelize.authenticate()
  .then(() => console.log(`connected to db: ${process.env.DB}`))
  .catch((err) => console.error(`error connecting to db ${process.env.DB}:`, err));


const Review = sequelize.define('Review', {
  review_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  review_date: {
    type: DataTypes.DATE
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  review_text: {
    type: DataTypes.TEXT
  },
  header: {
    type: DataTypes.TEXT
  },
  would_recommend: {
    type: DataTypes.BOOLEAN
  }
})

const User = sequelize.define('User', {
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  username: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  thumbnail: {
    type: DataTypes.STRING
  }
});

Review.belongsTo(User, {foreignKey: 'user_id'});
User.hasMany(Review, {foreignKey: 'review_id'});

Review.sync();
User.sync();


module.exports = {
  db: sequelize,
  User,
  Review
}