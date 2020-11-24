const express = require('express');
const productRoutes = require('./routes/productRoutes.js');
const request = require('supertest');
const { Product } = require('../db/index');

const { Sequelize } = require('sequelize');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/products', productRoutes);
const sequelize = new Sequelize(
  'test', 
  process.env.USERNAME,
  null,
  {
    host: process.env.HOST,
    dialect: 'postgres',
    logging: false
  }
  );

describe('testing service api routes', () => {
  beforeAll(async (done) => {
      await sequelize.authenticate();
      await Product.sync();
      done();
  });

  afterAll(async (done) => {
    await Product.drop()
    await sequelize.close();
    done();
  })

  describe('GET route', () => {

    test('GETs product successfully', async (done) => {
      let prodObj = {
        "name": 'Another GET',
        "description": 'This is testing my get route',
        "price": 110.99,
        "salePrice": 0.99,
        "features": [
            'Stuff',
            'Things'
        ],
        "category": 'get get get'
      }

      await Product.create(prodObj)

      let response = {
        "status": "success",
        "data": {
          "product": {
            "name": 'Another GET',
            "description": 'This is testing my get route',
            "price": 110.99,
            "salePrice": 0.99,
            "features": [
              'Stuff',
              'Things'
            ],
            "category": 'get get get'
          }
        }
      }

      try {
        const { body } = await request(app).get('/products/1');
        expect(body.data.name).toBe(response.data.name);
        expect(body.data.description).toBe(response.data.description);
        expect(body.data.price).toBe(response.data.price);
        done();
      } catch (error) {
        done(error);
      }
    });

    test('GET to invalid id results in 404', async (done) => {
      try {
        const response = await request(app).get('/products/1000000');
        expect(response.status).toBe(404);
        expect(JSON.parse(response.text)).toStrictEqual({"status":"failure","message":"Error getting product"});
        done();
      } catch (error) {
        done(error);
      }
    })

  });

  describe('PATCH route', () => {

    test('PATCH successfully updates a product by id', async (done) => {
      let patchObj = {
        "product": {
        "name": 'Another PATCH',
        "description": 'This is testing my get route',
        "price": 110.99,
        "salePrice": 0.99,
        "features": [
            'Stuff',
            'Things'
        ],
        "category": 'get get get'
      }};

      try {
        await request(app).patch('/products/1').send(patchObj);
        const { body } = await request(app).get('/products/1');
        expect(body.data.name).toBe(patchObj.name);
        expect(body.data.description).toBe(patchObj.description);
        expect(body.data.price).toBe(patchObj.price);
        done();
      } catch (error) {
        done(error);
      }
    });

    test('PATCH to invalid id results in 404', async (done) => {
      let patchObj = {
        "product": {
        "name": 'Another PATCH',
        "description": 'This is testing my get route',
        "price": 110.99,
        "salePrice": 0.99,
        "features": [
            'Stuff',
            'Things'
        ],
        "category": 'get get get'
      }};

      try {
        const response = await request(app).get('/products/1000000').send(patchObj);
        expect(response.status).toBe(404);
        expect(JSON.parse(response.text)).toStrictEqual({"status":"failure","message":"Error getting product"});
        done();
      } catch (error) {
        done(error);
      }
    })

  });

  describe('POST route', () => {
    test('POST successfully adds a product', async (done) => {
      let postObj = {
        "product": {
        "name": 'POSTing a new product',
        "description": 'This is testing my post route',
        "price": 1.99,
        "salePrice": null,
        "features": [
            'Stuff',
            'Things'
        ],
        "category": 'post post post'
      }};

      try {
        await request(app).post('/products').send(postObj);
        const { body } = await request(app).get('/products/2');
        expect(body.data.name).toBe(postObj.name);
        expect(body.data.description).toBe(postObj.description);
        expect(body.data.price).toBe(postObj.price);
        done();
      } catch (error) {
        done(error);
      }
    });

    test('POST results in 404 with bad data', async (done) => {
      let postObj = {
        "message": "This won't work because it's not supposed to"      
      };

      try {
        const response = await request(app).get('/products').send(postObj);
        expect(response.status).toBe(404);
        done();
      } catch (error) {
        done(error);
      }
    })
  });

  describe('DELETE route', () => {
    test('DELETE successfully removes a product by id', async (done) => {
      try {
        await request(app).delete('/products/2');
        const response = await request(app).get('/products/2');
        expect(response.status).toBe(404);
        expect(JSON.parse(response.text)).toStrictEqual({"status":"failure","message":"Error getting product"});
        done();
      } catch (error) {
        done(error);
      }
    });

    test('DELETE results in 404 with non-existing id', async (done) => {
      try {
        const response = await request(app).get('/products/4000');
        expect(response.status).toBe(404);
        done();
      } catch (error) {
        done(error);
      }
    })
  });
});