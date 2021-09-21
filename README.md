# servicesServicesServices
Example of micro-service architecture based app for the heck of it and the sake of Pete.

## Table of Contents

1. [Description](#description)
1. [Technologies](#technologies)
1. [Requirements](#requirements)
1. [Installation and Usage](#installation_and_usage)

## Description

ServicesServicesServices is a fake product page used as an example of mircoservice architecture. Three microservices, a product description service, an image carousel and a reviews service can work independently but are served together in one html file through a reverse-proxy server.

The initial GET request from the browser goes to the proxy, retrieving the three service bundles. These bundles each individually make requests to the proxy which are forwarded to their individual Node.js servers. The node servers query their database for product data based on the product ID specified in the url. Each service independently displays the data on the browser, decoupling each service's functionality.

The product description service shows a persisted description, feature list, and color and size options specific to each product. The image carousel can be navigated with buttons, dragging the main image, or clicking a thumbnail. The reviews section has an infinite scroll, fetching 10 more reviews every time the user reaches the bottom of the page.

All data was generated programmatically using custom generation scripts and fakerjs.

<img width="505" alt="architecture" src="https://user-images.githubusercontent.com/44039679/134218802-61184ec1-f399-4438-af68-cf282526259e.png">

## Technologies

Application was created with:
* Javascript
* Nodejs
* Express
* React
* Styled Components
* CSS/SASS
* Webpack
* PostgresDB
* MongoDB
* Mongoose
* Sequelize

Previous Deployment on AWS:
* AWS EC2
* AWS Load balancer
* AWS S3 bucket for images
* Docker

Testing:
* laoder.io
* New Relic
* Jest
* Enzyme

## Requirements

- Node 6.13.0
- Local install of PostgreSQL and MongoDB

## Installation and Usage

From within `proxy` directory
```
npm install
npm start
```

From within `service1` directory
```
npm install
npm run seed
npm run build:prod
```
For testing of service:
```
npm run build:dev
npm run test
```

From within `service2` directory
```
npm install
npm run seed
npm run build:dev
```


From within `service3` directory
```
npm install
npm run seed
npm run build:dev
```

Open browser to:
http://localhost:8080/prod_id
replacing prod_id with 1-4 for rendering of all three services in conjunction



